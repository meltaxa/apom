var counter = 0;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('mode')) {
    var mode_param = urlParams.get('mode');
} else {
    var mode_param = 'default';
}
if (urlParams.has('image')) {
    var image_param = urlParams.get('image');
} else {
    var image_param = null;
}
if (urlParams.has('max')) {
    var max_param = urlParams.get('max');
} else {
    var max_param = 60;
}
if (urlParams.has('timer')) {
    var timer_param = urlParams.get('timer');
} else {
    var timer_param = 60;
}
if (urlParams.has('nasakey')) {
    var nasakey_param = urlParams.get('nasakey');
} else {
    // Replace DEMO_KEY with your https://api.nasa.gov/ key
    var nasakey_param = "DEMO_KEY";
}

var img_url = "images/";

// Overrides for demo mode
console.log(window.location.href);
if (window.location.href == "https://apom.mellican.com/") {
    mode_param = "demo";
}
if (mode_param == "demo") {
    timer_param = 10;
    img_url = "https://astro.mellican.com/apom/images/";
    mode_param = "random";
    image_param = null;
}

// Overrides for NASA APOD mode
if (mode_param == "nasa") {
    timer_param = 86400; 
};

function change_apom() {
    const uniq = Date.now();
    let minutes = counter++;
    if (counter == max_param) {
        counter = 0;
    }

    // Load new image. The parameter forces CDNs for the non-cached object
    var reimgapom
    reimgapom=document.getElementById('live-apom')
    if (mode_param == "random") {
        minutes = Math.floor(Math.random() * max_param);
    }
    if (typeof image_param === 'undefined' || image_param === null) {
        img_src = img_url + minutes + ".jpg?" + uniq;
    } else {
        img_src = img_url + image_param + "?" + uniq;
    }
    if (mode_param == "nasa") {
        nasarequested(nasakey_param);
    } else if (existsFile(img_src)) {
        reimgapom.src=img_src;
    } else {
        change_apom();
    }

    // Load new image caption. The parameter forces CDNs for the non-cached object
    const caption_url = img_src.replace('jpg','txt');
    if (existsFile(caption_url)) {
        apom_caption(caption_url);
    } else {
        document.getElementById("title").innerHTML = "";
    }

    // Replace the APOM title with the minutes ordinal
        apom_title()
    }

(function countdown(remaining) {
    if(remaining === 0) {
        change_apom();

        // Reset the timer
        remaining = timer_param;
    }

    if(remaining > 0) {
        setTimeout(function(){ countdown(remaining - 1); }, 1000);
    }

})(timer_param);

function apom_caption(url) {
    $('#caption').load(url);
}

function apom_title() {
    if (mode_param == "random") {
        apoth = "My Random Astronomy Picture of the Moment"
    } else {
        apoth = "My Astronomy Picture of the Moment"
    }
    document.getElementById("moment").innerHTML = apoth;
}

function existsFile(url) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 404) {
                console.log("404 detected");
                return false;
            }
        }
    }
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function nasarequested(nasaKey){
    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const title = document.querySelector("#caption");
    const copyright = document.querySelector("#copyright");
    const mediaSection = document.querySelector("#media-section");
    const information = document.querySelector("#description");
    const currentDate =new Date().toISOString().slice(0, 10);
    const imageSection =`<a id="hdimg" href="" target="-blank"></a>`

    const videoSection=`<div class="video-div"> <iframe id="videoLink" src="" frameborder="0"></iframe></div>`

    let newDate = "";

    function fetchData(){
        try{
            fetch(baseUrl+nasaKey+newDate)
            .then(response=> response.json())
            .then(json=>{
                diplaydata(json)
            })
            }catch(error){
                console.log(error)
            }
    }
    
    function diplaydata(data){
    
        document.getElementById("moment").innerHTML = "NASA Astronomy Picture of the Day";
        title.innerHTML=data.title;
    
        if(data.hasOwnProperty("copyright")){
            copyright.innerHTML=data.copyright;
        } else{
            copyright.innerHTML=""
        }   
    
        if(data.media_type=="video"){
            mediaSection.innerHTML=videoSection;
            document.getElementById("videoLink").src=data.url;
           
        }else{
            document.getElementById("live-apom").src=data.url;
        }

        if (apiKey == "DEMO_KEY"){
            document.getElementById("live-apom").src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/574px-NASA_logo.svg.png";
            title.innerHTML="Click here for a &rarr; <a href='https://api.nasa.gov/' target='_blank'>NASA API</a> key";
            copyright.innerHTML="Then edit apom.js and replace DEMO_KEY"
        }
    }
    fetchData();
}

window.onload = function() {
    if (mode_param == "nasa") {
        nasarequested(nasakey_param);
    } else {
        change_apom();
    }
}
