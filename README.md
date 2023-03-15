# APOM - Astronomy Picture of the Minute

A glorified online slideshow that cycles an image every minute inside a fine art frame.

As seen on Dennis Mellican's APOM site: <a href="https://astro.mellican.com/apom/">https://astro.mellican.com/apom/</a>

<p align="center">
  <!--- 
  Github will by default use it's Camo CDN to cache images (https://github.blog/2014-01-28-proxying-user-images/). 
  To override this, on the origin web server add the header Cache-Control no-cache. Also if you are using 
  Cloudflare set the Browser Cache TTL to respect existing headers.
  --->
  <img src="https://mellican.com/images/apom.png?github-v1" width=70%>
</p>

APOM works by rotating a sequence of images based on the minutes of the current time.

## Instructions

1. Download and unzip this Github repo under your website directory.

2. Copy your astro pics to the images directory.

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
