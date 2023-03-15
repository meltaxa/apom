# APOM - Astronomy Picture of the Minute

A glorified online slideshow that cycles an image every minute inside a fine art frame.

As seen on Dennis Mellican's APOM site: <a href="https://astro.mellican.com/apom/">https://astro.mellican.com/apom/</a>

<p align="center">
  <!--- 
  Github will by default use it's Camo CDN to cache images (https://github.blog/2014-01-28-proxying-user-images/). 
  To override this, on the origin web server add the header Cache-Control no-cache. Also if you are using 
  Cloudflare set the Browser Cache TTL to respect existing headers. The solarspy-live.png image is a Puppeteer 
  screenshot and updated every 5 minutes displaying the energy usage at Meltaxa's home.
  --->
  <img src="https://mellican.com/images/apom.png?github" width=70%>
</p>

APOM works by rotating a sequence of images based on the minutes of the current time.

## Pre-requisites and Instructions

1. Linux OS. The BASH script really should be converted to Python for a more agnostic approach. 
   Submit a PR if you make this work on other platforms.

2. A running webserver that the BASH script has access to copy images to..

3. A directory of images with a numbered sequence suffix. For example:
    ```01-image_of_Orion.jpg
       02-image_of_M83.jpg
       05-image_of_Pleiades.jpg
    ```
    Note: You can skip a sequence. In the above example, image 02 would display for 3 minutes.

4. Optional: A text file to accompany the image file that contains a caption. For example:
    ```01-image_of_Orion.txt
       05-image_of_Pleiades.txt
    ```

5. Edit the BASH script and replace the path to the images.

6. Edit the index.html and replace the URL string with your website containing the images.
