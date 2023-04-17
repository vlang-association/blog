---
title: "Meet the new Documentation"
subtitle: Brief overview of the new Documentation site
summary: ""
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Announcements" ]
date: 2023-04-17T00:00:01+04:00
image: images/meet-new-documentation/cover.png
---

When the language was released, its documentation was placed on the site
[vlang.io/docs (archive.org link, June, 23, 2019)](https://web.archive.org/web/20190623015404/https://vlang.io/docs),
however at some point it was moved to GitHub to a file **docs.md** and has remained in this form to
[this day](https://github.com/vlang/v/blob/master/doc/docs.md).

This approach has increased the number of contributors to documentation, but it has drawbacks when
the documentation is relatively small, one file is not very large, but when the documentation grows
rapidly, one file turns into a huge canvas of a text that becomes difficult to read and maintain.

In documentation in one document, it is difficult to focus on a single section because you don’t see
a hierarchy, but you see many of the headers that follow each other.

In one document, it is difficult or almost impossible to track the history when
some section was last changed or who contributed more to its writing.

One document located on GitHub is bad with SEO optimizations, search engines more like
individual pages, with an explicit title on which you can search and all the additional
meta information about the page.

## New Documentation

These shortcomings led us to make the documentation on a separate site, solving the problems
described above.

The new documentation is located at [docs.vosca.dev](https://docs.vosca.dev).

We see the main benefit that in the process of creating new documentation, we have also
greatly expanded it, adding a lot of new content.
By comparison, the official documentation contains 6,700 lines when our new documentation contains
10,500 lines.
The documentation grew by 56%, which we believe is a great result.

Some sections now have good documentation, for example,
[compile-time reflection](https://docs.vosca.dev/concepts/compile-time/reflection.html)
or
[generics](https://docs.vosca.dev/concepts/generics.html).

## Features

The tree-like structure of the documentation makes it easy to navigate through it, sections are
divided into articles that are very easy to refer to.

For each article, you can see the date of the last modification; in the future we may also add the
ability to view the list of particular article authors.

Also, each article has a handy link that automatically redirects to GitHub to edit the selected
article.
This is handy if you find a typo, as it allows you to jump right into fixing it and creating a Pull
Request.

It is also convenient to navigate through the pages using the left and right arrows, which allow you
to navigate to the next and previous article without having to use the mouse.

### Search

Searching through documentation allows you to quickly find the right information, and it is able to
search, even if there are minor typos in the word, and also can search for whole phrases.

This search is much more convenient than a browser search, as you see more context for every entry
you find, making it easier to navigate them.

We host our own
[Meilisearch](https://www.meilisearch.com)
instance, which allows us to search very quickly and not depend on third-party paid services.

### Interactive code snippets

In the new documentation, part of the code examples can be run directly in the browser using the
**Run** button in the upper right corner of the code block.

```v {play=true}
fn main() {
    println('Hello, Blog!')
}
```

Moreover, you can immediately change the code and run it again!
We believe that adding interactivity to the documentation will allow people to enter the language
more softly and learn it more quickly.

We were able to do this thanks to the Playground update described in the following article:

{{< article-link link="/meet-updated-playground.md" >}}

### New Getting Started section

The V documentation does not have a specific section with articles that describe all the necessary
steps to get started with V.
Therefore, we decided that in our documentation we want to have such a
[section](https://docs.vosca.dev/getting-started/overview.html).

We have also moved to this section
[FAQ](https://docs.vosca.dev/getting-started/faq.html)
article which was located
in V repository
[Wiki](https://github.com/vlang/v/wiki).

This is another advantage of documentation on a separate site, easy to collect information in one
place.

The [Basics](https://docs.vosca.dev/basics/basic-syntax.html) section is also related to Getting
Started, but has been placed in a separate section.
In it the new user will be able to quickly view the basic examples and idioms of the language, as
well as read about the code convention.

### New Tools section

In this section, we have put together some tools that help with V development.
In the future, we plan to add any useful tools for work with V.
If you have such a tool, we will be glad to your
[Pull Request](https://github.com/vlang-association/docs)!

### New Language Reference section

Language specification is always a very time-consuming task, as V does not have it at the moment,
but we have expanded two existing articles about keywords and operators.

Now on [keyword page](https://docs.vosca.dev/language-reference/keywords.html) you can see where
specific keywords are used.

### Afterword

We hope that the new documentation will be more convenient and useful for both beginners and
experienced V users.
If you have suggestions or comments on new documentation, write here in comments, create issues on
GitHub or write to us in
[Discord](https://discord.gg/vlang).
