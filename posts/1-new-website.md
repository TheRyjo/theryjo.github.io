---
title: New Website
date: 2023-11-12
tags: ['first post', '11ty']
---
__It's HERE!__

And I'm excited.

Some might feel the enthusiasm of these words is incongruent with the accomplishment at hand - a refresh of a small (and virtually empty) website. Nonetheless, this update represents a milestone in re-centering myself on an important goal - more frequent sharing of my ideas and creations.

Back in 2017, I decided to create a personal website. With an online footprint consisting of occasional social media and forum posts, I wanted a more characterful curation of personal and professional information - a digital "business and more" card of sorts.

I quickly found a suitable vehicle in Jekyll ([https://jekyllrb.com/](https://jekyllrb.com/)), a static site generator (SSG) written in Ruby. SSGs are tools to create fully static (bundle-of-files) websites through a build-process transformation of templates and content. With no backing database or server-side logic, running an SSG-derived website is as simple as throwing output files on a hosting server. In addition, I observed that Jekyll was well-documented, blog-aware, and could be hosted for free on Github through Github Pages.

I soon had a new domain name registration and a starter SSG project. With a few photos, code samples, and placeholder posts, the site was ready to take shape as my mini monolith of virtual presence. Configuring hosting through Github Pages was also a breeze, requiring a few new DNS records and a config file in the source repository.

![old.jpeg](/images/1-new-website/old.jpeg)

And then? Not much.

In an unpolished state, and lacking content, the site drifted through the digital ether. Notwithstanding incremental updates to include a jQuery lightbox plugin (Featherlight) and an updated layout (Hyde), it didn't feel ready to show off.

In hindsight, I think these two issues of aesthetics and content were major contributors to the site's stagnation. By not developing the site's visuals to a presentable state, I unintentionally shielded myself from the accountability and motivation to improve that accompanies external feedback. On the content side, a lack of concrete goals or follow-through meant a lack of direction for site updates. The site's existence _per se_ lacked creative gravity much like the gravitational insufficiency of a cart hitched before the proverbial horse.

Fast-forward to some months ago. After a few years and various professional experiences, I found myself at a juncture with opportunity to reflect and discover, including reading blogs and drawing inspiration from the work of brilliant tech netizens.  

Some favorites:

- [http://www.paulgraham.com/](http://www.paulgraham.com/)
- [https://www.henrikkarlsson.xyz/archive](https://www.henrikkarlsson.xyz/archive)
- [https://stewartsmith.io/](https://stewartsmith.io/)
- [https://nathanrooy.github.io/](https://nathanrooy.github.io/)
- [https://maximeheckel.com/](https://maximeheckel.com/)

With fresh inspiration, I came back to the drawing table with my personal site.

My goals for a refresh were three-fold:
1. Simplify and change platforms if appropriate.
2. Refocus the site toward professional experiences, posts, and demos.
3. Revamp the site's look & feel.

I started with a review of alternative platforms. I would be sticking with SSGs, but given my professional experience and the maturity of the ecosystem, I had a hunch that a pure JS/Typescript offering would be available. Coming across 11ty ([https://www.11ty.dev/](https://www.11ty.dev/)), I found my hunch to be correct! 11ty's simplicity, feature set, build speed, and JS core made it a great project fit, while its broad commercial adoption by the likes of NASA, Google, Netlify, MIT, Foursquare, etc. spoke to its quality and long-term prospects.

Platform? Check.

Looking to the site's refocusing, I wanted to reduce the number of sections and streamline the presentation of content. I eschewed a detailed biography and specific topic sections like 'code', 'photos', 'rowing', as they could be included within more generic categories. With modest deliberation, I landed on 'home', 'work', 'posts', and 'about' pages, which keep the focus on presenting professional and creative output while maintaining a capacity for various topics of interest.

With this decided, it was apparent that a simplicity in layout would be complemented by a corresponding simplicity in styling. Nathan Rooy's personal site ([https://nathanrooy.github.io/](https://nathanrooy.github.io/)) was highly influential for this. I borrowed the black-and-white color scheme as well as the list presentation style for posts. I departed, however, with a non-collapsible header and some modest flair including a conspicuous and dynamic homepage decoration. This culminated in a "fun" minimalism - maintaining clarity while entertaining a few punchy, interspersed dynamic elements or demo previews.

Which brings us to...

![new.jpeg](/images/1-new-website/new.jpeg)

Overall, the implementation was pleasantly straightforward.

Some interesting moments included:
- Picking a quirky decorative element for the homepage.
- Learning 11ty's WebC language as a mechanism for components (similar to Single File Components in Vue, but less dynamic and fully resolved to HTML at build time).
- Figuring out template language support (nunjucks) for passing data to WebC components:
{% raw %}
    ```nunjucks
    {% for post in collections.post | reverse %}
    {% renderTemplate "webc", { post: post } %}
    <post :post="post" webc:keep></post>
    {% endrenderTemplate %}
    {% endfor %}
    ```
{% endraw %}

All in all, I'm very pleased and excited to move forward with content and updates.

Cheers!
