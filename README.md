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

My APOM works by rotating a sequence of images located under numbered images directory.

## Instructions

1. Download and unzip this Github repo under your website directory.
   https://github.com/meltaxa/apom/archive/refs/heads/main.zip

2. Copy your astro jpg files to the images directory.
   If you have more then 60 images, see the Usage section below for the max setting.

3. Rename the pics in sequence. For example:
    ```00.jpg
       01.jpg
       05.jpg
    ```
    A 00.jpg is provided as a default. 
    Note: You can skip a sequence. In the above example, image 01 would display for 4 minutes.

4. Optional: A text file to accompany the image file that contains a caption. For example:
    ```01.txt
       05.txt
    ```

## Usage

Using My APOM is mostly inituitive by hovering over the icons to display tool tips.

Click on the icons to understand how the URL parameters change for you to later customize.

For example, the timer parameter by default is 60 seconds. This can be customised, say to rotate the image every 30 seconds:
    ```https://astro.mellican.com/apom/?timer=30```

If you have more than 60 images, use the max parameter to set the number of images you have. For example, if you have 93 images:
    ```https://astro.mellican.com/apom/?max=93```

The full list of parameter options:
    ```mode=random will pick a random jpg image from your images directory. Default is sequential from 00.jpg.
       timer=<number> will set the countdown time in the number of seconds. Default is 60.
       image=<filename> will only display the image from your images directory without cycling.
       max=<number> will set the limit of the image sequence to be cycled. Default is 60.o
    ```
