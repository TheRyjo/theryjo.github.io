---
title: Fingermap 
date: 2023-11-16
tags: ['web app','open source']
---

__A few months ago__, I made my first-ever open source contribution.

This admission may surprise, even shock, as I've worked in industry across a variety of stacks for over a decade.

While it's true my employers have been small and mid-size companies with a penchant for using rather than creating open source software, the real reason I've made it so far without contributing is simple...

I never tried.

Indeed, the massive and welcoming ecosystem for open source software today leaves little excuse to not take part. As noted on <u>[Github's blog](https://github.blog/2022-11-17-octoverse-2022-10-years-of-tracking-open-source/)</u>:
> "In 2022 alone, developers started 52 million new open source projects on GitHub—and developers across GitHub made more than 413 million contributions to open source projects."

This is not to say that issues of project scarcity, gatekeeping, or other barriers to entry don't exist, but the simple fact is that a vast array of opportunities exists for developers in many domains and of many different skill levels.

Which brings me to...

#### <u><b>[MonkeyType](https://monkeytype.com/)</b></u>

Monkeytype was created in 2020 as a single-developer passion project to make a minimalist, customizable online typing test. Since then it has grown rapidly, with <u>[365 million tests taken, an active Discord server, and hundreds of supporters and contributors](https://monkeytype.com/about)</u>.

<img src="/images/3-fingermap/monkeytype-home.png"  width="600" alt="todo" style="">

I've been a big fan of Monkeytype for my typing practice, with highest speeds to date being 135wpm over 15 seconds and 117wpm over 60 seconds (100% accuracy). When I saw that Monkeytype is <u>[open-source on Github](https://github.com/monkeytypegame)</u>, I saw a perfect opportunity to contribute.

In particular, I observed that the subproject <u>[Fingermap](https://github.com/monkeytypegame/monkeytype-fingermap)</u>, a keyboard finger map editor, exhibited multiple issues I would happily take on, including:

- An inability to select keys using keypress.
- A lack of mobile layout/responsiveness.
- An outdated / diverged style as compared to the main site.

<img src="/images/3-fingermap/fm-old.png"  width= "600" alt="todo" style="">

I started by joining the Monkeytype Discord, creating an issue on the repo, forking, and working up a draft solution for keypress selection. I was updating this code as a fun exercise, so I wasn't concerned with negotiating the changes in advance with the project owner _Miodec_. I hypothesized that providing a hosted demo of the updates would offer a strong introduction and elicit a faster response.

<img src="/images/3-fingermap/discord-msg.png"  width= "600" alt="todo" style="">

The response was prompt and positive!

_Miodec_ expressed interest in the update and suggested additional changes. Over the course of a week and with numerous iterations, updates addressing all items of interest were PR'd and merged to the main repo. 

<img src="/images/3-fingermap/fm-new.png"  width="600" alt="todo" style="">

<br />
<br />

<img src="/images/3-fingermap/fm-new-mobile.png"  width="300" alt="todo" style="">

Some noteworthy process and implementation points:

- __Keypress selection__ required changing other shortcuts to remove conflicts. Previously, keys 1-10 had been used for finger selection. The shift key also had overlap as a modifier key, which I resolved with logic to differentiate between quick press (selection) and hold (modifier).
- __Header updates__ entailed some questions about icon usage, label presence, and styling. These were ultimately resolved with a healthy deference to the main site.
- __Responsiveness__ required a new mobile header as well as a mechanism for keyboard resizing. This proved pretty interesting, as the existing code was resistant to standard sizing mechanisms. In particular, preserving the aspect ratios on resize was tricky given the layout and markup. To solve this, I created a wrapper that I call an _Aspect Ratio Box_ - scaling smoothly while preserving aspect ratio and interactivity. I've posted a <u><b>[demo](https://codepen.io/TheRyjo/pen/ZEmRmgm)</b></u> to Codepen.

At the time of writing, Fingermap is hosted at <u>[https://fingermap.monkeytype.com/](https://fingermap.monkeytype.com/)</u>

I've also separately hosted snapshots for:
#### <u><b><a href="https://storage.googleapis.com/ryjo.io/fingermap-before/index.html" target="_blank">Before</a></b></u> | <u><a href="https://storage.googleapis.com/ryjo.io/fingermap-after/index.html" target="_blank">After</a></u>

Thank you for reading!
