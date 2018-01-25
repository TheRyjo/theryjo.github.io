---
layout: default_custom
custom_css:
- home
---

<div class="home-grid">
	<a class="home-tile" href="/bio">
		<img class="tile-image" src="/assets/img/home/bio_sq_250.png">
		<div class="tile-text">Bio</div>
	</a>
	<a class="home-tile" href="/code">
		<img class="tile-image" src="/assets/img/home/code_sq_250.png">
		<div class="tile-text">Code</div>
	</a>
	<a class="home-tile" href="/photos">
		<img class="tile-image" src="/assets/img/home/photos_sq_250.png">
		<div class="tile-text">Photos</div>
	</a>
	<a class="home-tile" href="/rowing">
		<img class="tile-image" src="/assets/img/home/hobbies_sq_250.png">
		<div class="tile-text">Rowing</div>
	</a>
</div>

<br />

<h2>Posts</h2>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>