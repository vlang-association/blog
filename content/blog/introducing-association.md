---
title: "Introducing the V Open Source Community Association (VOSCA)"
subtitle: Brief overview of the Association's mission
summary: "The V Open Source Community Association (VOSCA) is a non-profit organization that is dedicated to the development of the V language. It is a place where people can come together to work on the V language and its ecosystem."
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
co_authorname: Mark aka walkingdevel
co_authorlink: walkingdevel
categories: [ "Announcements", "Association" ]
date: 2023-03-30T09:34:23+04:00
image: images/introducing-association/vosca.png
pinned: true
---

Hi, we,
[Petr](https://github.com/i582), and
[Mark aka walkingdevel](https://github.com/walkingdevel)
from the V development team, announce the creation of the **V Open Source Community Association**
aka VOSCA.

The Association is a **non-profit organization** that is dedicated to the development of the V
language.

## Prelude

For a long time, V has been developing independently; **one person** makes decisions on the
development and advertising of the language.
However, one person does not always keep track of all aspects of the development and spread of a
language.

## Deadlines

We believe that deadlines help to make the evolution of the language/ecosystem transparent.
Of course, it is not always possible to meet the deadlines, but even if the deadlines are postponed,
it is not critical if this phenomenon does not become permanent.
The Association **will notify** the community of any postponements, if any.

## Funding

The development of almost any open source project is **very dependent on sponsors**.
From their financial support, the project can receive the necessary resources for development.
For example, **hire people** who will be involved in language development, documentation, testing,
etc.

The V Open Source Community Association is registered on the
[Open Collective](https://opencollective.com/vsof) platform,
allowing anyone interested to keep
track of where the money is going and how it's being spent.

## What Association has done already?

Association is released on the website where we have collected our developments.
We hope they make learning a language easier and more productive.

### New Documentation

We have revised most of the documentation articles and placed them in a convenient form on
[docs.vosca.dev](https://docs.vosca.dev).
We added new articles to the already existing parts of the documentation to cover more features of
the language.
As a result, the documentation has grown by about **50%** compared to the original.

The site has a search so that anyone can find the information they need, the search is
tolerant of small errors, which will also help to find information easier.

Learn more in this article:

{{< article-link link="/meet-new-documentation.md" >}}

### Playground

Prior to the creation of the Association, we had already improved the official Playground with a new
look and feel.
Now we have taken it a step further, and it now has a new backend that allows us to make
new features such as viewing the generated C code or passing arguments when compile or
run the program.

See updated Playground in action on
[play.vosca.dev](https://play.vosca.dev).

#### Embedded playground component

As part of the Playground update, we also created a component that can be embedded in any
page.
Thus, on any page you can get a convenient playground where you can edit and run V code.
This component is already used in
[Documentation](https://docs.vosca.dev),
[Vings](https://learn.vosca.dev/vings),
[Modules](https://modules.vosca.dev/),
and here, in blog.

```v
fn main() {
	areas := ['game', 'web', 'tools', 'science', 'systems',
	'embedded', 'drivers', 'GUI', 'mobile']
	for area in areas {
		println('Hello, ${area} developers!')
	}
}
```

Learn more in this article:

{{< article-link link="/meet-updated-playground.md" >}}

### Vings

Vings is a platform for learning V through solving small problems.
On it, anyone can start learning V through solving problems, each of which will link to the
documentation about a current topic.

Learn more in this article:

{{< article-link link="/meet-vings-platform.md" >}}

### ORM

One of the main parts of modern web development is working with a database.
In V, the tool for high-level interactions with the database is ORM.
But while ORM gave good abstractions, it did not provide good type checks and security.

We have written a type check for all parts of ORM query expressions,
added a check for expressions that do not make sense at runtime,
and improved the typing of attributes for relationships between tables.
The main [recent change](https://github.com/vlang/v/pull/17871) was the addition of a `Result` for
all queries and array as a type, even for queries with `limit 1` or `id == ?`.

{{< article-link link="/is-v-orm-direction-right.md" >}}

### Modules API website

V itself has a fairly extensive standard library with many modules.

Navigating it is not always convenient, so we
created [modules.vosca.dev](https://modules.vosca.dev/standard_library/index.html)
that shows all the modules of the standard library along with a search for them, which greatly
simplifies the search for the right one.

TODO: WIP

Learn more in this article:

{{< article-link link="/meet-modules-platform.md" >}}

### Blog

We think any language should have a platform where it posts information about updates, changes, or
event announcements.

We have created a blog where we will post news about V so that users can get new
information quickly.
We will also be posting tutorials there that will tell users how to do something in V.

### IntelliJ V

The JetBrains IDE plugin is now also part of the Association and will be further developed
officially.
The plugin is currently the best solution for V development and provides the widest
feature set.

You can learn more about the plugin on the landing page:
[https://intellij-v.github.io](https://intellij-v.github.io).

{{< rawhtml >}}

<figure>
<img
src="/images/introducing-association/intellij-v.png"
alt="Screenshot showing the IntelliJ V">
<figcaption>IntelliJ V</figcaption>
</figure>

{{< /rawhtml >}}

Today we also released the first version of the plugin on behalf of the Association:

{{< article-link link="/intellij-v-beta.4.md" >}}

## Plans

### New Language Server

The Association's first big task will be to develop a new Language Server for V.
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

{{< rawhtml >}}

<figure>
<img
src="/images/introducing-association/raw-debugger-view.png"
alt="Screenshot showing the debugger raw values for V array type">
<figcaption>Current V array representation in debugger</figcaption>
</figure>

{{< /rawhtml >}}

We plan to make their display at approximately the same level as they are already done in the plugin
for JetBrains IDE.

{{< rawhtml >}}

<figure>
<img
src="/images/introducing-association/idea-debugger-view.png"
alt="Screenshot showing the debugger inside IntelliJ V plugin">
<figcaption>Types view in IntelliJ V plugin</figcaption>
</figure>

{{< /rawhtml >}}

### Language Grammar Formalization

Right now, a small group of developers is developing a new compiler architecture.
The goal is to make a compiler according to all the canons of the industry, taking into account all
the mistakes made earlier.
One step is to formalize the grammar so that it can be represented as a formalized description in
EBNF format.

{{< rawhtml >}}

<figure>
<img
src="/images/introducing-association/ebnf-example.png"
alt="Screenshot showing the EBNF grammar for Golang">
<figcaption>EBNF grammar of Golang</figcaption>
</figure>

{{< /rawhtml >}}

In parallel with the development of the two things above, we will continue to formalize the grammar,
which will result in a page in the documentation with a complete grammar of the language that can be
used to create third-party tools.

### Continue improving ORM

There is still a lot of work to improve ORM.
Now the ORM functionality covers only the basic needs for performing CRUD tasks,
but all of them do not go beyond pet-projects.
And there is functionality that the community has been waiting for a long time.
For example, the operators `like` and `in`.

Based on the existing problems and user wishes, we have built the following roadmap for ORM:

- Support for structures that do not have an `id` field
- Support for optional fields for structures and `NULL`s
- The `like` operator
- The `in` operator
- Full documentation for ORM
- Improved support for low-level libraries for working with databases
- Support for migrations
- Test and CI coverage for SQLite, PostgreSQL, MySQL, MSSQL
- The ability for users to expand the functionality of ORM independently
