---
layout: default_custom
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
- black-lashes-1
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
- vintage-fixed
- white-hot
---
[Home]({{ site.baseurl }}{% link index.md %})
<code>&nbsp;</code>
[Posts]({{ site.baseurl }}{% link blank.md %})
<code>&nbsp;</code>
[Sandbox]({{ site.baseurl }}{% link sandbox.md %})
<code>&nbsp;</code>
[Photos]({{ site.baseurl }}{% link photos.md %})
<code>&nbsp;</code>
[Rowing]({{ site.baseurl }}{% link rowing.md %})
<code>&nbsp;</code>
[About]({{ site.baseurl }}{% link about.md %})

Here are some photos I took.

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

