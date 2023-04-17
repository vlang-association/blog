---
title: "IntelliJ V beta.4"
subtitle: Minor update with debugger improvements and rename refactoring
summary: ""
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Announcements", "IntelliJ V" ]
date: 2023-04-17T00:00:01+04:00
image: images/intellij-v-beta.4/cover.png
---

**beta.4** — the first plugin version released under
[VOSCA](https://vosca.dev/).
It took a long time to create an association and projects for it, so it is a small release,
but we still have something to show.

The new version of the plugin can be downloaded via the IDE, see
[instruction](https://plugins.jetbrains.com/plugin/20287-vlang/docs/quick-start-guide.html#install-update-the-plugin)
for more details.
Or you can download the plugin
[directly from GitHub](https://github.com/intellij-v/intellij-v/releases)
and install manually.

## Debugger improvements

Debugging is undoubtedly one of the great features of the plugin, as it provides a convenient way to
find bugs in programs.
One of the very handy features of debuggers is to execute small expressions.
However, the LLDB and GDB debuggers do not support this feature for V, so we decided to
add this feature directly in the plugin.

It is currently experimental and supports a small subset of expressions,
but it will evolve and support more V expressions in the future.

{{< video src="/images/intellij-v-beta.4/evaluation.mp4" type="video/mp4" preload="auto" >}}

We also improved the display of variable values in the debugger window, now they are highlighted as
in the editor:

{{< image src="/images/intellij-v-beta.4/debugger-view.png"
alt="Screenshot showing the debugger variables view" >}}

We also improved the display of strings containing line breaks or tabs, now, when opening the entire
value, the text is displayed with line breaks and tabs:

{{< image src="/images/intellij-v-beta.4/debugger-string-view.png"
alt="Screenshot showing the debugger string value view" >}}

We also fixed a few bugs and made small improvements:

- In debugger, now `NULL` displays as `nil`
- Function types are now displayed in a more readable way in the debugger
- Enums with alignment now also displayed in the debugger in the correct way
- On Windows primitive types also displayed as `u32`/`i32`/etc. instead of `int` or `unsigned` in
  debugger
- Support for maps and arrays with pointer type values in the debugger
- Do not step into some generated functions when debug
- Add name and address to pretty printer for interfaces in the debugger

## Rename refactoring improvements

In V, comments for functions/structures/etc. should contain as the first word the name of the symbol
for which they describe the documentation.

In this update, we have added a link so that when you rename a symbol, the name in the comment will
also be renamed.

{{< image src="/images/intellij-v-beta.4/comment-highlighting.png"
alt="Screenshot showing the comment highlighting" >}}

We also highlight such names in a different color to make it easier to distinguish
them from a regular text.

## ORM Updates

The ORM recently received an update that changed the behavior in some cases.
For example, now, `sql db { ... }` expressions always return `Result`.
We have updated the plugin's handling of such expressions to work correctly with the new behavior.

For example, we will warn that the following expression is now erroneous:

{{< image src="/images/intellij-v-beta.4/orm-fixes.png"
alt="Screenshot showing the error about unhandled Result type of ORM sql expression" >}}

## Other changes

The `it` variable in array initialization has been renamed to `index`, the plugin will warn you
about it and give you a quick fix:

{{< image src="/images/intellij-v-beta.4/it-variable.png"
alt="Screenshot showing the message that the `it` variable has been renamed to `index`" >}}

We've extended name checking, so it will also check local variable names
(thanks to [@saturn4er](https://github.com/saturn4er)):

{{< image src="/images/intellij-v-beta.4/wrong-variable-name.png"
alt="Screenshot showing the message that variable has the wrong name" >}}

We also fixed a few bugs and made some small improvements.
You can check them out in
[changelog](https://github.com/intellij-v/intellij-v/blob/main/CHANGELOG.md).
