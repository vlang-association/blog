---
title: "Is V ORM direction right?"
subtitle: Thoughts about V ORM and its problems
summary: ""
page: Blog
authorname: Mark aka walkingdevel
authorlink: walkingdevel
categories: [ "Announcements" ]
date: 2023-04-06T17:32:01+00:00
image: images/is-v-orm-direction-right/cover.png
---

In this article, I would like to discuss the V ORM and the direction it is headed.
I want to understand what needs to be improved, otherwise, it needs to be reworked.
And the official V ORM documentation will help us with this.

The official documentation says the following about the V ORM:

- One syntax for all SQL dialects. (Migrating between databases becomes much easier)
- Queries are constructed using V's syntax. (There's no need to learn another syntax)
- Safety. (All queries are automatically sanitized to prevent SQL injection)
- Compile time checks. (This prevents typos which can only be caught during runtime)
- Readability and simplicity. (You don't need to manually parse the results of
a query and then manually construct objects from the parsed results)

And now let's analyze this list point by point and decide which of these makes sense and which does not.

## One syntax for all SQL dialects

Let's look at the following examples in different DBMSs.

### SQLite

{{< rawhtml >}}

<figure>
<img src="/images/is-v-orm-direction-right/sqlite.png"
alt="Screenshot showing the simple SQLite example"/>
<figcaption>SQLite example</figcaption>
</figure>

{{< /rawhtml >}}

### PostgreSQL

{{< rawhtml >}}

<figure>
<img src="/images/is-v-orm-direction-right/postgres.png"
alt="Screenshot showing the simple PostgreSQL example"/>
<figcaption>PostgreSQL example</figcaption>
</figure>

{{< /rawhtml >}}

### MySQL

{{< rawhtml >}}

<figure>
<img src="/images/is-v-orm-direction-right/mysql.png"
alt="Screenshot showing the simple MySQL example"/>
<figcaption>MySQL example</figcaption>
</figure>

{{< /rawhtml >}}

Do you see the differences between these simple queries? I don't.
You can, of course, write more complex queries so that differences begin to appear,
but you may not be able to express such code in V ORM.

What about migrations between databases?
How often do you need to change the DBMS in your projects?
In my opinion, this is not a significant advantage for V ORM because it places the burden of migration on the user.
**Simple queries are simply written everywhere**, but the user will still have to migrate the data.

I believe this point is somewhat misleading and requires revision.
But to make this item fully valid, it requires the addition of migrations
and expanding the V ORM syntax so that it allows you to write more complex queries.

The following roadmap can make this point valid
(once these items are finished, they will be marked as completed):

- [ ] Support for optional fields for structures and `NULL`s
- [ ] The `like` operator
- [ ] The `in` operator
- [ ] Support for structures that do not have an `id` field
- [ ] Support for migrations

**And when more complex queries are allowed,
and migrations modify tables and their data, we can consider this point fully valid.**

## Queries are constructed using V's syntax

That's true. It is impressive to be able to use variables from the scope in V ORM queries. For example:

```v
fn (mut app App) get_repo_issue_count(id int) int {
    return sql app.db {
        select count from Issue where repo_id == id
    }
}
```

We just took the `id` value and used it at the destination. But there is also a problem.
Any V expression is any ORM expression. Before the checker fixes, we could even write such queries:

```v
users := sql database {
    select from User where database
}
```

That means we used the database connection as a criterion for selection.
Which in itself was wrong and created problems for the cgen.

I think this point from the documentation is correct,
but **the checker for V ORM requires even more strict checks**.

And about the development. Because any V ORM expression is an expression of V,
to add, for example, the `like` operator, you need to add
a new operator to the language itself and prohibit it from working outside of the V ORM.

I think if V ORM were not part of cgen, then everything would have been simpler.
It generates complex C code that is difficult to maintain.
However, if V ORM were a separate abstraction transformer,
we could desugar the code to V after parsing.
This would enable the checker to verify the converted code without making any changes to cgen.
Additionally, using V ORM in different backends would become possible.

## Safety

This is also true. Queries are automatically sanitized to prevent SQL injection.
And more recently, V ORM also requires you to
[always check the result of the query](https://github.com/vlang/v/pull/17871)
in case of an exceptional situation.

I have nothing to add here. **Everything is cool now**.

## Compile time checks

Until recently, this point was considered false as the checks were very weak
and it was possible to write anything in the expression without any validation.
However, the checker has since been improved, although **there is still room for growth**.
Therefore, this point is now considered true.

{{< rawhtml >}}

<figure>
<img src="/images/is-v-orm-direction-right/order-by.png"
alt="Screenshot showing the error from V ORM that the field from `order by` is not found."/>
<figcaption>V ORM in latest V</figcaption>
</figure>

{{< /rawhtml >}}

I want to add even more checks for expressions
**so that cgen gets only valid code and the hints are as clear as possible.**

## Readability and simplicity

V ORM provides a significant benefit compared to using raw SQL queries,
as it eliminates the need for unnecessary operations to construct objects,
which are handled automatically. As a result,
users can easily manipulate the output **without any additional coding overhead**.
And this is also true. When using V ORM in your code,
you only need to focus on the data, without worrying about anything else.

## What is the result?

After working with V ORM, I have two impressions.
The first is that it's all very convenient and native.
And the second is that it is quite inflexible, challenging to maintain,
dependent on one C backend, and hard to extend.

### What do I suggest?

My first step will be to simplify cgen for V ORM as much as possible,
so that it can be easily modified by anyone, especially for queries involving multiple tables.
Next, I will fix all user problems related to V ORM and low-level libraries for databases.
As soon as it's all done, I'll start stuffing it with new features.

My goal is to finish developing the V ORM so that it can be used not only for creating new projects
but also for transferring old ones. This will enable the V ORM to work seamlessly with existing database schemes.

In my opinion, the ability to work conveniently with both the web and databases
often surpasses other language features because of the ubiquitous nature of the Web.
This can lead to the growth of the community
since developers can more easily create web applications with database support.

But what about the title of this article? I think V ORM is a good concept.
But, in general, this idea seems utopian,
as it would require either constantly requesting developers
to add new functionality or reverting to raw SQL queries.
Perhaps we need to provide another user-friendly interface for raw queries.
I didn't think about it. But when I fix low-level libraries,
I will write another article with thoughts about it.

Even if the direction is wrong, we will correct it.

And when there are no open [issues](https://github.com/vlang/v/issues?q=is%3Aissue+is%3Aopen+orm)
related to ORM in the V repository,
I plan to demonstrate how it can be implemented outside the compiler,
highlighting its ease and simplicity. Stay tuned.
