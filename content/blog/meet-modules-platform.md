---
title: "Meet the Modules Platform"
subtitle: Brief overview of the Modules platform — easily explore V modules
summary: ""
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Announcements" ]
date: 2023-04-17T00:00:01+04:00
image: images/meet-modules-platform/cover.png
---

V is a very modular language, it has a simple style of public API documentation, so you can
automatically generate documentation for any project.

API documentation is not only about public functions/structures/etc., but also about their
dependencies.

If your module uses other modules, it is always interesting to track which ones.
Doing this manually is not so simple, it is much more convenient to see this information in the API
documentation.

The site [modules.vlang.io](https://modules.vlang.io) is already trying to solve this problem, but
at the moment it provides a simple definition of symbols that already can be found in the IDE.

The module platform project and the Doki API generator are an attempt to make the API documentation
more useful and informative.

You can see the current version of the platform at [modules.vosca.dev](https://modules.vosca.dev).

Unfortunately, due to tight deadlines and a large number of projects, we did not manage to bring
this project to the final point.
Modules for now provide documentation for **standard library V** modules only.

You can also search for modules in the header search by switching to the **Modules** tab.

In the future we plan to host documentation for all VPM packages there, but to do this we need to
solve some interesting problems, due to the large number of modules.

## Features

The idea behind **Doki** is to make the API documentation more useful and informative by providing more
information.

At this time, we provide the following information:

- Version
- Licence
- Dependencies from **v.mod**
- List of imported modules (module dependencies)
- Lists of modules that import this module

Also, important is the ability to move to the definition of a symbol if it is used, for example, in
the signature of a function.

For example, if your function uses type `other.Foo`, you can click on it and go to its definition in
the documentation.

You can also easily navigate to the symbol code by clicking on the arrow to the right of its name.

## Afterword

This project has a long way to go;
now it is just a prototype that allows you to look at the standard V library as we see it.

If you have suggestions or comments about this platform, write here in comments or write to us in
[Discord](https://discord.gg/vlang).
