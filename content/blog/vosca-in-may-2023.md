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

May is over, so let's talk about what's new in VOSCA this month (and in April, since we
didn't post such an article then, since VOSCA was launched on April 17th).

## ORM Improvements

- Added
[support](https://github.com/vlang/v/pull/18020)
for the new `like` keyword, which functions similarly to the `LIKE` operator in SQL.
- [Allowed](https://github.com/vlang/v/pull/18140)
the usage of structs for ORM without the `id` field,
providing more flexibility in defining primary keys.
- [Implemented](https://github.com/vlang/v/pull/18078)
`db` type checks to ensure that it implements the `orm.Connection` interface and is not an `Option`.
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
This ensures that there are no buffer overflows and avoids allocating extra memory for strings that are less than 512 bytes in size.

## New VLS

On June 5th we started a closed alpha test of a new VLS which we called **spawn-analyzer**. 🥳
The test will last until July 3, after which we will start an open beta test in which everyone can
take part.

We're very excited as this is an important project for the V ecosystem, and also quite challenging,
we'll see how the alpha goes.

## Documentation improvements

- Improved keyboard accessibility (thanks [@tobealive](https://github.com/tobealive))
- Improved section about concurrency, now instead of one article it consists of 5 articles on
  different topics related to concurrency.
- Improved description of `typeof`.
- Added section about `null reference`.

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
which should be easier to fix compared to addressing the challenges associated with the entire ORM.
Additionally, there are approximately 10 issues that involve adding new functionality to the ORM.

## Donations

We want to thank the following people for their donations ❤️:

- YUART
- Hunam
- Francesc Ortiz
- ffred
- Theo A.

Thanks to your support, we get more motivation to work and develop V and VOSCA.
Of the $55 we received, we paid about $10 for hosting so that all our sites would work without
interruption.

We have also added a list of all sponsors to the [main page](https://vosca.dev).

{{< image src="/images/vosca-in-may-2023/sponsors.png"
alt="Screenshot showing the list of sponsors on the main page of the VOSCA website" >}}

## What's next?

In June, we will continue to work on what we did in May, spavn-analyzer and ORM improvements.

See you in a month!

Bye.
