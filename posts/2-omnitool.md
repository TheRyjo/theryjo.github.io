---
title: Omnitool
date: 2023-11-13
tags: ['chrome Extension', 'vue', 'featured']
---
<b><u>[Omnitool](https://github.com/theryjo/omnitool)</u></b> is a Chrome extension prototype that enables quick access to custom utilities.

<div style="text-align: center">
<video controls autoplay loop muted width="375" style="text-align: center">
  <source src="/images/2-omnitool/extension-seq.mp4" type="video/mp4">
  This browser does not display the video tag.
</video>
</div>
<br />

Omnitool has an omnibox-style interface for tool search and invocation, offering speed, simplicity, and flexibility for tasks lacking support from built-in browser tools.

I created Omnitool with inspiration from experience on a small developer team supporting a suite of CMS and service-backed web applications for a Fortune 50 client. Day-to-day operations included repeated tasks such as:
- _Navigating complex web environments_.
- _Making frequent API calls to trigger cache clears and other operations_.
- _Inspecting and reproducing web application state_.
- _Debugging client-initiated service calls_.

Team members had previously written a handful of small (and very useful) one-off browser extensions. The concept for Omnitool came about as a means to consolidate these tools and provide an efficient, intuitive interface.

Some noteworthy features listed by objective:

1. SIMPLE
   - _A unified omnibox-style tool search interface_.
   - _A consistent command-based model for tool invocation_.
   - _A pattern for wrapping pre-existing pages as tools with an 'iframe'_.

<div style="white-space: nowrap">
<img src="/images/2-omnitool/extension-help.png"  width="300" alt="todo" style="display: inline-block; vertical-align: top">
<img src="/images/2-omnitool/extension-autocomplete.png"  width="300" alt="todo" style="display: inline-block; vertical-align: top">
</div>
<br />

2. FAST
    - _Quick-opening when configured with a keyboard shortcut (rec. <kbd>CMD</kbd> + <kbd>K</kbd>)_.
    - _Autocomplete for tool search_.
    - _A tool invocation history with shortcuts for tool selection and re-invocation_.
 
<br />
<div style="white-space: nowrap">
<img src="/images/2-omnitool/extension-lorem-history.png"  width="300" alt="todo" style="display: inline-block; vertical-align: top">
<img src="/images/2-omnitool/extension-lorem-param.png"  width="300" alt="todo" style="display: inline-block; vertical-align: top">
</div>
<br />

3. FLEXIBLE
    - _Tool definitions that support a wide range of custom tools_.
    - _Optional tool implementations patterns for tool panes, tool execution output, and hybrid text/GUI tool interfaces_.
    - _Tool 'pinning' to allow for multiple tool selection_.

<br />
<div style="white-space: nowrap">
<img src="/images/2-omnitool/extension-links-pop.png"  width="250" alt="todo" style="display: inline-block; vertical-align: top">
<img src="/images/2-omnitool/extension-color.png"  width="250" alt="todo" style="display: inline-block; vertical-align: top">
<img src="/images/2-omnitool/extension-env-tab.png"  width="250" alt="todo" style="display: inline-block; vertical-align: top">
</div>
<br />

The Omnitool 'demo-tools' branch includes tool samples that showcase these features (as shown in screenshots above.)

The tool development pattern is accessible to most web developers. A tool definition consists of a small package of files.

<img src="/images/2-omnitool/tool-files.png"  width="225" alt="todo" style="display: inline-block; vertical-align: top">
<br />

The tool logic and metadata is defined in a JS/TS module.

<img src="/images/2-omnitool/tool-code.png"  width="450" alt="todo" style="display: inline-block; vertical-align: top">
<br />

The optional tool UI is defined in a linked Vue component.

<img src="/images/2-omnitool/tool-pane.png"  width="450" alt="todo" style="display: inline-block; vertical-align: top">
<br />
<br />

See the <u>[source](https://github.com/theryjo/omnitool/tree/demo-tools)</u> on Github.

That's about it! In the future I may provide additional implementation details in a separate post.

Some quirks that I would like to address prior to release:
- Omnitool is not listed in the Chrome Web Store. Although I haven't tried yet, this may be impossible due to the store's "single purpose" policy for extensions, which has been in effect since 2013. This [policy](https://developer.chrome.com/docs/webstore/program-policies/quality-guidelines-faq/#:~:text=To%20maintain%20the%20quality%20of,in%20the%20Chrome%20Web%20Store.) requires "extensions to have only a single purpose with respect to its subject matter or browser function". In the meantime, the extension may be loaded in developer mode as an "unpacked extension" without impacting functionality.
- Addition of a new tool currently requires a rebuild and reload. Hot-swappable tools would greatly enhance ease of tool sharing and developer synchronization. This might also be achieved with data-driven wrapping tools.
- Omnitool lacks global and tool-specific configuration options. It does save a small amount of core state on close, but adding configuration or customization would require this to be extended.
- A lack of sophisticated and relevant demo tools.

Thank you for reading! I'm looking forward to testing and feedback to see if this prototype is worth further development.

Cheers!
