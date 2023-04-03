---
title: "Introducing the V Software Foundation"
subtitle: Brief overview of the Foundation's mission
summary: "The Foundation is a non-profit organization that is dedicated to the development of the V language. It is a place where people can come together to work on the V language and its ecosystem."
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Announcements", "Foundation" ]
date: 2023-03-30T09:34:23+04:00
image: images/why-we-need-foundation/foundation.png
pinned: true
---

Hi, we,
[Petr](https://github.com/i582), and
[Mark aka walkingdevel](https://github.com/walkingdevel)
from the V development team, announce the
creation of the V Software Foundation.

The Foundation is a **non-profit organization** that is dedicated to the development of the V
language.

# Prelude

For a long time, V has been developing independently; **one person** makes decisions on the
development and advertising of the language.
However, one person does not always keep track of all aspects of the development and spread of a
language.

# Founding

The development of almost any open source project is **very dependent on sponsors**.
From their financial support, the project can receive the necessary resources for development.
For example, **hire people** who will be involved in language development, documentation, testing,
etc.

However, when funding is not transparent, neither community members nor the sponsors themselves know
where the funding goes or how it is spent.

The V Software Foundation is registered on the
[Open Collective](https://opencollective.com/) platform,
allowing anyone interested to keep
track of where the money is going and how it's being spent.

# Deadlines

Unlike the development of the language itself, the Foundation **respects deadlines**, and we believe
that deadlines help to make the evolution of the language/ecosystem transparent.
Of course, it is not always possible to meet the deadlines, but even if the deadlines are postponed,
it is not critical if this phenomenon does not become permanent.
The Foundation will notify the community of any postponements, if any.

## What Foundation has done already

Foundation is released on the website where we have collected our developments.
We hope they make learning a language easier and more productive.

### New Documentation

We have revised most of the documentation articles and placed them in a convenient form on
[docs.vlang.foundation](https://docs.vlang.foundation).
We added new articles to the already existing parts of the documentation to cover more features of
the language.
As a result, the documentation has grown by about 50% compared to the original.

The site has a search so that anyone can find the information they need, the search is
tolerant of small errors, which will also help to find information easier.

TODO: Link to article with full description.

### Modules API website

V itself has a fairly extensive standard library with many modules.

Navigating it is not always convenient, so we
created [modules.vlang.foundation](https://modules.vlang.foundation/standard_library/index.html)
that shows all the modules of the standard library along with a search for them, which greatly
simplifies the search for the right one.

TODO: WIP
TODO: Link to article with full description.

### Playground

Prior to the creation of the Foundation, we had already improved the official Playground with a new
look and feel.
Now we have taken it a step further, and it now has a new backend that allows us to make
new features such as viewing the generated C code or passing arguments when compile or
run the program.

#### Embedded playground component

As part of the Playground update, we also created a component that can be embedded in any
page.
Thus, on any page you can get a convenient playground where you can edit and run V code.
This component is already used in
[documentation](https://docs.vlang.foundation),
[Vings](https://learn.vlang.foundation/vings),
[Modules](https://modules.vlang.foundation/),
and here, in blog.

TODO: Link to article with full description.

### Vings

Vings is a platform for learning V through solving small problems.
On it, anyone can start learning V through solving problems, each of which will link to the
documentation about a current topic.

TODO: Link to article with full description.

### Blog

We think any language should have a platform where it posts information about updates, changes, or
event announcements.

We have created a blog where we will post news about V so that users can get new
information quickly.

We will also be posting tutorials there that will tell users how to do something in V.

### IntelliJ V

The JetBrains IDE plugin is now also part of the Foundation and will be further developed
officially.
The plugin is currently the best solution for V development and provides the widest
feature set.

### ORM

TODO: часть бессмертного комара

## Plans

### New Language Server

The Foundation's first big task will be to develop a new Language Server for V.
This is an important project as most programmers use VS Code or Vim, for which the plugins provide
only basic highlighting.

The new LS will provide features such as **auto-completion**, **go to definition**, and more.
At the moment, only the plug-in for JetBrains IDE offers these features, but not everyone wants and
can use them.

A quality LS will solve this problem and make V much more convenient to use.

Open beta testing is planned in 2 months, we will announce the start of testing in advance.

### Debug enhancements with GDB and LLDB

In parallel with the creation of the new LS, we plan to qualitatively improve the debugging
capabilities of the V code.

Now, for many built-in V types, debuggers show a raw form that is difficult or impossible to work
with.

We plan to make their display at approximately the same level as they are already done in the plugin
for JetBrains IDE.

### Language Grammar Formalization

Right now, a small group of developers is developing a new compiler architecture.
The goal is to make a compiler according to all the canons of the industry, taking into account all
the mistakes made earlier.
One step is to formalize the grammar so that it can be represented as a formalized description in
EBNF format.

In parallel with the development of the two things above, we will continue to formalize the grammar,
which will result in a page in the documentation with a complete grammar of the language that can be
used to create third-party tools.

### Continue improving ORM

TODO: часть бессмертного комара
