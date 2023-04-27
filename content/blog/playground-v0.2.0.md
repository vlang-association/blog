---
title: "Playground v0.2.0"
subtitle: Big update of the V Playground
summary: ""
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Announcements", "Playground" ]
date: 2023-04-27T15:13:54+04:00
image: images/playground-v0.2.0/cover.png
---

Almost 3 months have passed since v0.1.0 release.
All this time, the playground has been developing, updates have been published in the
[Discord](https://discord.gg/vlang),
and in this article we want to talk about what has been added during this time.

Before we start, I note that development is now taking place in the
[vlang-association/playground](https://github.com/vlang-association/playground)
repository, and the playground itself is hosted at
[play.vosca.dev](https://play.vosca.dev).

## Custom build and run arguments

Sometimes you need to pass some additional arguments when compiling or running the program.
For example, pass the `-autofree` flag to test program in this mode,
or pass flags when your program starts up to check that they are handled correctly.

We have added two fields to the toolbar that allow you to pass arguments when compiling and running
programs:

{{< image src="/images/playground-v0.2.0/build-run-arguments.png"
alt="Screenshot showing Playground build and run text inputs">}}

These parameters will also persist if you share the code, so that whoever opens the link gets the
same settings to run.

## Show generated C code

We have added a new run configuration that allows you to view the generated C code.
To do this, select the `Show generated C code` configuration in the run button:

{{< image src="/images/playground-v0.2.0/cgen-run-configuration.png"
alt="Screenshot showing Playground Show generated C code configuration">}}

Playground will request the generated C code and display it in a separate editor on the right, next
to the V code editor:

{{< image src="/images/playground-v0.2.0/cgen-res.png"
alt="Screenshot showing Playground Show generated C code result">}}

While the playground shows C code, it also matches V and C lines, so you can click on a line in the
V code, and it will highlight the corresponding line in the C code:

{{< image src="/images/playground-v0.2.0/cgen-line-match.png"
alt="Screenshot showing Playground Show generated C code line match capabilities">}}

This feature greatly simplifies debugging simple bugs with C code generation, as it allows you to
quickly test hypotheses without having to manually recompile and open C code, and then look for the
necessary lines in it.

It also allows you to view the output with different compiler flags, such as the `-autofree` flag,
which may be of general interest to people who are just starting to learn V.

## Terminal improvements

We have added several improvements to the terminal that make it more useful and convenient.
In version 0.1.0, for example, if there was a warning in the code, then it was simply not shown in
the output, which sometimes raised questions about why V did not report some possible problems.

We have divided the terminal into two tabs, in one we show the entire output of the compilation, and
in the other we show only the output of the program.

{{< image src="/images/playground-v0.2.0/build-log.png"
alt="Screenshot showing Playground new build log output tab">}}

This made it possible to display more information while also showing the output of the program in
the first place.

## Mobile support

Using the playground on mobile devices in version 0.1.0 was pretty inconvenient, in general, the
playground concept works better on devices with a large screen, but we still tried to make it more
mobile-friendly.

Now the toolbar on mobile devices is scrollable, which allows access to all buttons, and the editor
is not wider than the screen, which avoids horizontal scrolling.

## V version update

Prior to version 0.2.0, the version of V with which programs were launched in the playground was
updated manually and very rarely, which led to the fact that the fixed bug continues to be
reproduced in the playground.

We have now added an automatic update every 6 hours, which allows users to run the code with the
latest version of V.

We also added the version of V that the code runs with:

{{< image src="/images/playground-v0.2.0/v-version.png"
alt="Screenshot showing Playground V version">}}

## "Report code as Bug" action

I often check the found bugs in V in the playground, this allows me to quickly check whether I am
right or not.

And if a bug is found, then every time you have to perform the same actions:

- Open GitHub
- Open repository
- Create a new issue
- Paste a code
- Paste a playground share link
- Paste the output of the program or the error with which the compiler failed
- Paste the version of V with which the code was run
- Paste the output of `v doctor` for more information about the system

To avoid repeating these actions, we have added a new action that is placed before a V version.
It does all these actions for you and opens a link to create an issue with pre-filled fields.

{{< image src="/images/playground-v0.2.0/report-as-bug.png"
alt="Screenshot showing Playground Report code as Bug action">}}

## Other improvements and fixes

- Added documentation: https://docs.vosca.dev/tools/playground.html
- Fixed support for numbers with `_` separators, as well as general parsing of numbers.
- When formatting, now if there are no errors, the terminal does not open automatically.
- Added highlighting of simple attributes.
- Added highlighting of field access.
- Added support for base64, now if you pass an encoded string as a parameter to the
  URL (`?base64=...`), then the code from it will be added to the playground editor.
- Added support for GitHub Gists, now if you pass a Gist ID as a parameter to the URL (`?gist=...`),
  then the code from it will be added to the playground editor.
- Added a `check_output` endpoint that will allow third party clients to check the output of a
  program against the expected output.
- Added the ability to increase the font using the `Ctrl + +` keyboard shortcut, since on some
  keyboards `+` is the main key instead of `=`.
- Added the ability to open / close the terminal using `Ctrl + T` shortcut.

## Conclusion

We hope that the new features will make the playground more convenient and useful for all
V developers and beginners, we will continue to improve it and add new features.

If you have any suggestions for improving playground, we will be glad to hear about them here in the
comments, in
[issues](https://github.com/vlang-association/playground/issues)
on GitHub or in
[Discord](https:///discord.gg/vlang).
