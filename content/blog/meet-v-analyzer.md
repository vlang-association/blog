---
title: "Meet v-analyzer"
subtitle: "Brief overview of the new Language Server for V"
summary:
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Association" ]
date: 2023-07-03T08:11:08+04:00
image: images/meet-v-analyzer/cover.png
---

Hey, folks!

Today we are launching the long-awaited first public beta version of **v-analyzer**.
v-analyzer is a tool that allows you to add to VSCode, Vim, Emacs and other editors IDE features.
For example, autocomplete, go to definition, or documentation on hover.

v-analyzer should work in all editors with
[Language Server Protocol](https://microsoft.github.io/language-server-protocol/overviews/lsp/overview/)
(LSP) support, however, we provide the best support in VS Code through a new extension
[v-analyzer for VS Code](https://marketplace.visualstudio.com/items?itemName=VOSCA.vscode-v-analyzer).
This extension is recommended and completely replaces the old
[V extension](https://marketplace.visualstudio.com/items?itemName=vlanguage.vscode-vlang).

**v-analyzer** came to replace the old
[VLS](https://github.com/vlang/vls),
which, unfortunately, was not stable and had architectural problems.
When writing v-analyzer, we took into account the problems of VLS and used the experience of writing
the
[IntelliJ V](https://intellij-v.github.io)
JetBrains IDE plugin.

**v-analyzer** is an important step in the development of V, most developers are accustomed to
certain
features that are provided by plugins in editors or IDEs.
Now the same features will be available for V, allowing more people to stay and enjoy the language.

## Showtime

Let us look at a couple of **v-analyzer** features:

### Autocompletion

{{< video src="/images/meet-v-analyzer/autocompletion.mp4" type="video/mp4" preload="auto" >}}

### Documentation on hover

{{< image src="/images/meet-v-analyzer/hover.png"
alt="Screenshot showing v-analyzer hover documentation">}}

### Live errors with quick fixes

{{< video src="/images/meet-v-analyzer/errors.mp4" type="video/mp4" preload="auto" >}}

Other features include:

- code completion/IntelliSense
- go to definition, type definition
- find all references, document symbol, symbol renaming
- types and documentation on hover
- inlay hints for types and some construction like `or` block
- semantic syntax highlighting
- formatting
- signature help

## Get started

If you are using VS Code, please visit
[README](https://github.com/v-analyzer/v-analyzer/tree/main/editors/code)
of our VS Code extension for installation and configuration instructions.

## V editor survey results

Last month we did a little survey to see which editors the community writes to.
We received 68 responses, let us look at the results:

**Question**:
What editor(s) do you use the most to write code? (Not necessarily for V, for other languages, at
work, at school, etc.)

- VS Code - **48** (70.6%)
- JetBrains IDE - **16** (23.5%)
- Neovim - **14** (20.6%)
- Vim/Sublime Text 4 - **9** (13.2%)
- Emacs/Visual Studio - **7** (10.3%)
- Helix - **5** (7.4%)
- Fleet/Notepad++/Kate - **2** (2.9%)
- vis/Android Studio/Gnome Builder/Eclipse - **1** (1.5%)

**Question**:
What editor(s) do you use specifically for writing V code?

- VS Code - **37** (54.4%)
- JetBrains IDE - **21** (30.9%)
- Neovim - **12** (17.6%)
- Vim - **6** (8.8%)
- Emacs/Sublime Text 4 - **4** (5.9%)
- Helix - **3** (4.4%)
- Kate/vis/Gnome Builder/NotePad++ - **1** (1.5%)

Most people use VS Code, which is not surprising since it is the most popular editor in the world.
The editors from JetBrains are in second place; in V they have a greater advantage, apparently due
to the presence of the IntelliJ V plugin.

Thanks to everyone who took part in the survey!

## Thanks

I want to thank the people who helped with the alpha testing of **v-analyzer** and the VS Code
plugin.
In particular, I am grateful to **@Ekopalypse**, it is thanks to him that v-analyzer works on
Windows without a lot of errors!
Thank you all, thanks to you we make V better!

## Feedback and Contributions

We welcome your feedback and contributions to make v-analyzer even better.
If you have any suggestions, questions, or issues, please visit the
[v-analyzer](https://github.com/v-analyzer/v-analyzer) repository or leave a comment below.
Feel free to leave your feedback, open issues, or submit pull requests.

## Links

- [v-analyzer](https://github.com/v-analyzer/v-analyzer) repository
- [v-analyzer extension](https://github.com/v-analyzer/v-analyzer/tree/main/editors/code)
  for VS Code repository
- [v-analyzer extension page](https://marketplace.visualstudio.com/items?itemName=VOSCA.vscode-v-analyzer)
  for VS Code

## What's next?

So far, v-analyzer officially supports only VS Code, other editors should also work thanks to LSP
support, but we do not guarantee that they will work correctly yet.
We will try to add support for Helix, Neovim and other editors soon.

v-analyzer is currently in beta, we cannot guarantee that it will work without errors.
Next, we will continue to work on improving v-analyzer and adding new features.

See you in v-analyzer!

Bye.
