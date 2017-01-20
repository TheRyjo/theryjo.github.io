---
layout: default
---
[About]({{ site.baseurl }}{% link about.md %})
*
[Blog]({{ site.baseurl }}{% link blank.md %})
*
[Experiments]({{ site.baseurl }}{% link blank.md %})
*
[Photography]({{ site.baseurl }}{% link blank.md %})
*
[Rowing]({{ site.baseurl }}{% link blank.md %})

![Me]({{ site.baseurl }}{% link me.jpg %})

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>