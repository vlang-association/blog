---
title: "IntelliJ V beta.4"
subtitle: Minor update with debugger improvements and refactorings
summary: ""
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Announcements", "IntelliJ V" ]
date: 2023-04-05T09:34:23+04:00
image: images/intellij-v-beta.4/cover.png
---

**beta.4** — the first plugin released under VOSCA.
It took a long time to create an association and projects for it, so it is a small release,
but we still have something to show.

The new version of the plugin can be downloaded via the IDE.
See
[instruction](https://plugins.jetbrains.com/plugin/20287-vlang/docs/quick-start-guide.html#install-update-the-plugin)
for more details.
Or download
[directly from GitHub](https://github.com/intellij-v/intellij-v/releases)
and install manually.

## Debugger improvements

Debugging is undoubtedly one of the great benefits of the plugin, as it provides a convenient way to
find bugs in programs.
One of the very handy features of debuggers is to execute small expressions.
However, the LLDB and GDB debuggers do not support this feature for V, so we decided to
add this feature directly in the plugin.

It is currently experimental and supports a small subset of expressions,
but it will evolve and support more V expressions in the future.

{{< video src="/images/intellij-v-beta.4/evaluation.mp4" type="video/mp4" preload="auto" >}}

We also fixed minor bugs in the debugger.

## Refactorings

In V, comments for functions/structures/etc. should contain as the first word the name of the symbol
for which they describe the documentation.

In this update, we have added a link so that when you rename a symbol, the name in the comment will
also be renamed.

{{< image src="/images/intellij-v-beta.4/comment-highlighting.png"
    alt="Screenshot showing the comment highlighting" >}}

We also highlight such names in a different color to make it easier to distinguish
them from a regular text.

## ORM Updates

There have been some recent changes to the ORM,
such as now always returning a Result type from `sql db { ... }` expression.
We fixed handling in the plugin that worked the old way, so now the plugin will tell you if there
is an error somewhere:

{{< image src="/images/intellij-v-beta.4/orm-fixes.png"
    alt="Screenshot showing the error about unhandled Result type of ORM sql expression" >}}

## Other changes

We also fixed a few bugs and made some small improvements, you can check them out
in [changelog](https://github.com/intellij-v/intellij-v/blob/main/CHANGELOG.md).

