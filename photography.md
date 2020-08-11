---
layout: page 
title: Photography 

custom_css:
- featherlight-1.7.0/featherlight.min
- featherlight-1.7.0/featherlight.gallery.min
custom_js:
- jquery-3.1.1.min
- featherlight-1.7.0/featherlight.min
- featherlight-1.7.0/featherlight.gallery.min

photos:
- a-cityscape
- austin
- black-lashes-2
- bloom
- boats
- brick-hall
- bulb
- burning-bush
- corner
- eye+
- greenway
- nh-stars+
- paralleloman
- sandbox
- sofa
- that-one
- trinity
- untitled
- white-hot
---

Here are some of my photos.

<section
  data-featherlight-gallery
  data-featherlight-filter="a"
>
  {% for photo in page.photos %}
  <a href="/assets/img/photos/photography/other/{{ photo }}.jpg">
    <img src="/assets/img/photos/photography/other/{{ photo }}.min.jpg">
  </a>
  {% endfor %}
</section>

