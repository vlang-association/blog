---
title: "VOSCA in May, 2023"
subtitle: "What's happening in VOSCA in May, 2023"
summary:
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
co_authorname: Mark aka walkingdevel
co_authorlink: walkingdevel
categories: [ "Association" ]
date: 2023-06-06T06:42:10+04:00
image: images/vosca-in-may-2023/cover.png
---

Hey, folks!

May is over, so let's talk about what's new in VOSCA this month (and in April, since we didn't post
an article during that time, since VOSCA was launched on April 17th).

## ORM Improvements

- Added
  [support](https://github.com/vlang/v/pull/18020)
  for the new `like` keyword, which functions similarly to the `LIKE` operator in SQL.
- [Allowed](https://github.com/vlang/v/pull/18140)
  the usage of structs for ORM without the `id` field,
  providing more flexibility in defining primary keys.
- [Implemented](https://github.com/vlang/v/pull/18078)
  `db` type checks to ensure that it implements the `orm.Connection` interface and is not
  an `Option`.
- Refactored and simplified the entire
  [checker](https://github.com/vlang/v/pull/18203)
  and
  [cgen](https://github.com/vlang/v/pull/18070)
  code for the ORM, making it more accessible for people to participate in the development process.
  This change reduces the effort required to get started with contributing to the ORM.
- [Added](https://github.com/vlang/v/pull/18268)
  the ability to commit MySQL transactions.
- [Added](https://github.com/vlang/v/pull/18214)
  dynamic memory allocation for each string and blob, depending on their value length.
  This ensures that there are no buffer overflows and avoids allocating extra memory for strings
  that are less than 512 bytes in size.

## New VLS

We initiated a closed alpha test of a new VLS, named spawn-analyzer, on June 5th. 🥳
This testing phase will continue until July 3, following which we will start an open beta test,
inviting everyone to participate.

Language Server is a tool that adds various IDE features to code editors (VS Code, Vim, Emacs,
Helix) such as autocompletion, jump to definition, and more.

We're very excited as this is an important project for the V ecosystem, and also quite challenging,
we'll see how the alpha goes.

## Documentation improvements

- Improved keyboard accessibility (thanks [@tobealive](https://github.com/tobealive))
- Improved section about
  [concurrency](https://docs.vosca.dev/concepts/concurrency/overview.html),
  now instead of one article it consists of 5 articles on different topics related to concurrency.
- Improved
  [description](https://docs.vosca.dev/concepts/compile-time/reflection.html#typeof-getting-the-type-of-expression)
  of `typeof`.
- Added
  [section](https://docs.vosca.dev/concepts/types/references.html#null-reference)
  about `null reference`.

## Statistics

- Since April 29, all VOSCA sites have been visited more than **12 thousand times**,
  from **93** countries.
  The number of unique users who have visited sites at least once is **1500+**.
  If you are interested in more detailed statistics, you can see them
  [here](https://analytics.vosca.dev).
- According to statistics as of June 5, the IntelliJ V plugin was installed **4600** times,
  **1200+** installations in May.
- Fixed 10 tasks in the ORM and databases, but there are still around 50 tasks left to be fixed.
  These calculations are approximate and include both existing issues
  and those that are yet to be submitted but are needed.
  About half of these issues relate to the database libraries,
  which should be easier to fix compared to addressing the challenges associated with the entire
  ORM.
  Additionally, there are approximately 10 issues that involve adding new functionality to the ORM.

## Donations

We want to thank the following people for their donations ❤️:

- YUART
- Hunam
- Francesc Ortiz
- ffred
- Theo A.

Your support greatly motivates us to continue working on the development of V and VOSCA.
Out of the total amount of $55 that we received, we allocated approximately $10 towards hosting
expenses to ensure uninterrupted operation of all our websites.
Your contributions play a crucial role in enabling us to sustain and advance our projects.

We have also added a list of all sponsors to the [main page](https://vosca.dev).

{{< image src="/images/vosca-in-may-2023/sponsors.png"
alt="Screenshot showing the list of sponsors on the main page of the VOSCA website" >}}

## What's next?

In June, we will continue to work on what we did in May, spavn-analyzer and ORM.

See you in a month!

Bye.
