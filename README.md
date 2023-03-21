# My APOM - My Astronomy Picture of the Moment

A glorified online slideshow that cycles an image periodically inside a fine art frame.

As seen on Dennis Mellican's APOM site: <a href="https://astro.mellican.com/apom/">https://astro.mellican.com/apom/</a>

<p align="center">
  <!--- 
  Github will by default use it's Camo CDN to cache images (https://github.blog/2014-01-28-proxying-user-images/). 
  To override this, on the origin web server add the header Cache-Control no-cache. Also if you are using 
  Cloudflare set the Browser Cache TTL to respect existing headers.
  --->
  <img src="https://mellican.com/images/apom.png?github-v1" width=70%>
</p>

My APOM works by rotating a sequence of images located under the images directory.

## Instructions

1. Download and unzip this Github repo under your website directory.
   https://github.com/meltaxa/apom/archive/refs/heads/main.zip

2. Copy your astro jpg files to the images directory.
   If you have more then 60 images, see the Usage section below for the max setting.

3. Rename the pics in sequence. For example:
    
       0.jpg
       1.jpg
       5.jpg
       6.jpg
       7.jpg
       8.jpg
       9.jpg
       10.jpg
    
    A 0.jpg is provided as a default. 
    
    Note: You can skip a sequence. In the above example, image 1.jpg would display for 4 minutes under default settings.

4. Optional: A text file to accompany the image file that contains a caption. For example:
    
       0.txt
       1.txt
       5.txt
       6.txt
       7.txt
       8.txt
       9.txt
       10.txt

## Usage

Visit your site URL and location on where it was installed. By default the 0.jpg will be displayed and images will be cycled every 60 seconds.

Customising My APOM is mostly inituitive by hovering over the icons to display tool tips.

Click on the icons to understand how the URL parameters change for further customisation.

For example, the timer parameter by default is 60 seconds. This can be customised to rotate the image every 30 seconds:

    https://astro.mellican.com/apom/?timer=30

If you have more than the default 60 images, use the max parameter to set the number of images you have. For example, if you have 93 images:

    https://astro.mellican.com/apom/?max=93

The same is true if you have less than 60 images, say only 17:
    
    https://astro.mellican.com/apom/?max=17

The full list of parameter options:
    
     mode=random      Selects a random jpg image from your images directory. 
                      Default mode is sequential from 0.jpg. Unset the mode parameter for the default.
     mode=nasa        Fetches the current NASA APOD. Timer is set for 24 hours. You will need a NASA API
                      key from https://api.nasa.gov/. Then edit apom.js and replace DEMO_KEY.
     mode=demo        Special mode that has the following overrides: Images from 
                      astro.mellican.com/apom, randomness, 10s timer. This mode is automatically 
                      invoked when viewing directly from the Github pages site: https://apom.mellican.com/.
     timer=<number>   Sets the countdown time in the number of seconds. Default is 60.
     image=<filename> Display the image from your images directory without cycling.
     max=<number>     Sets the limit of the image sequence to be cycled. Default is 60.

For multiple options, add the & character and the parameter option in the URL. For example, to randomly rotate images every 5 seconds:

    https://astro.mellican.com/apom/?mode=random&timer=5
    
Of course, you can override all defaults permanently by customising the source files directly. Some basic coding experience may be necessary.
