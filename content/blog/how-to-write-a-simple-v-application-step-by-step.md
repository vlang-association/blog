---
title: "Tutorial: How to Write a Simple V Application Step by Step"
subtitle: "Building a simple utility to display the top V repositories based on the number of stars"
summary: ""
page: Blog
authorname: Mark aka walkingdevel
authorlink: walkingdevel
categories: [ "Tutorials" ]
date: 2023-04-10T17:58:13+00:00
image: images/how-to-write-a-simple-v-application-step-by-step/cover.png
---

When I decided to write a training article on V, I initially had no specific idea in mind.
After some consideration, I decided to combine the article with the V community itself
by developing a utility that displays the top repositories on V based on the number of stars
they have on GitHub.
This will help identify the most popular repositories and contributors within the V community.

Of course, the V language and projects by the V organization will be included in the leaderboards,
but I still wonder who was able to accumulate more stars outside the language organization.

## Installing V

If you haven't installed V yet, then follow the instructions from the
[Installation](https://docs.vosca.dev/getting-started/installation.html)
article from documentation.

## Creating a project

Let us create a new project, V provides the handy `v new` command for this:

```shell
v new stars
```

The command will ask you to provide additional information about the project, which you can skip
by pressing `Enter`.

As a result, the command will create a new folder `stars` and add several files to it:

```shell
cd stars
tree .

# .
# ├── src
# │   └── main.v
# └── v.mod
#
# 2 directories, 2 files
```

Let us check that everything is fine by running our project:

```shell
v run .

# Hello, World!
```

## Fetching

I have already prepared the URL from which we can fetch the data.
You can open it in your browser and view the JSON output:
https://api.github.com/search/repositories?sort=stars&order=desc&q=language:v

GitHub returns JSON with the total number of repositories, and the `items` field contains an array
of repositories that we need.
It's already pre-sorted by stars in descending order because we specified that in the part
`sort=stars&order=desc` of request in the URL.

Now, our task is simply to fetch the data from this URL and output it to the terminal.
Open the file `src/main.v` in your favorite editor or IDE.
You can see the available plugins for your editor in
[documentation](https://docs.vosca.dev/tools/editor_plugins/overview.html).

In this article, we will use the JetBrains IDE with the
[IntelliJ V](https://intellij-v.github.io)
plugin, as this bundle provides
the best V development experience.

{{<image src="/images/how-to-write-a-simple-v-application-step-by-step/1.png"
alt="Screenshot showing the IDE with boilerplate code generated by V">}}

In order to fetch the list of repositories, we need the
[`net.http`](https://modules.vosca.dev/standard_library/net/http.html)
module.
To make a simple GET request, we can use the `get()` method,
which takes a request URL as a parameter.

Let us import this module.
You can read more about imports in
[documentation](https://docs.vosca.dev/concepts/modules/module-imports.html).

```v
import net.http
```

Next, add a constant with GitHub URL:

```v
const github_repositories_url = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=language:v'
```

Remove the current code from the `main()` function and add a `http.get()` call to fetch the data
from the URL, and output the response body.

```v skip
fn main() {
	response := http.get(github_repositories_url)!

	println(response.body)
}
```

Since `http.get()` returns the
[Result](https://docs.vosca.dev/concepts/error-handling/overview.html#result-types),
we must either
[handle](https://docs.vosca.dev/concepts/error-handling/overview.html#or-blocks)
the error case or
[propagate](https://docs.vosca.dev/concepts/error-handling/overview.html#propagating-noneerrors)
it up.

> If you propagate an error in the `main()` function,
> the program will panic because it is not possible to propagate the error further up the call
> stack.

As a result, we will get the following code:

```v
module main

import net.http

const github_repositories_url = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=language:v'

fn main() {
	response := http.get(github_repositories_url)!

	println(response.body)
}
```

Try to execute it using the `v run .` and look at the result.

## JSON magic

From the GitHub response, we need only two fields, `total_count` and `items`.
From `items` we need not all fields, only `full_name`, `description`, `stargazers_count`,
and `html_url`.

The
[`json`](https://docs.vosca.dev/concepts/working-with-json.html)
module does not require describing all fields,
we can specify only the necessary fields, and the rest will be ignored.

The `json.decode()` method accepts a structure that will be built during the parsing process and
a string with JSON; in our case, it is the `response.body`.

So let us describe this
[structure](https://docs.vosca.dev/concepts/structs/overview.html).
As we decided earlier, we only need `total_count` and `items`:

```v skip
struct GitHubRepositoriesSearchAPI {
pub:
	total_count int
	items       []GitHubRepositoriesItem
}
```

`items` — is an array of structures, so we also need to provide a structure for it:

```v skip
struct GitHubRepositoriesItem {
pub:
	full_name        string
	description      string
	stargazers_count int
	html_url         string
}
```

These are all the structures we need to describe the JSON response from GitHub.
We only need to parse the response into a structure.

Add the following code after `response := http.get(github_repositories_url)!`:

```v skip
repositories_result := json.decode(GitHubRepositoriesSearchAPI, response.body) or {
	panic('An error occurred during JSON parsing: ${err}')
}
```

In the code above, you may notice the variable `err`, which no one has declared before.
This is a special variable that is defined in the `or` block, which contains the error that
was returned from the function.
The `or` block and the `err` variable are syntax sugar for unwrapping the Result or the Option type,
you can read more about it in
[documentation](https://docs.vosca.dev/concepts/error-handling/overview.html#or-blocks).

Once we have the structure, we can work with the data the way we are used to in V.
For example, to output the total number of repositories in V, we can add the following code:

```v skip
println('The total repository count is ${repositories_result.total_count}')
```

V supports
[string interpolation](https://docs.vosca.dev/concepts/types/strings.html#string-interpolation),
which allows us to include variables or expressions directly in strings.
This feature makes it easy to format strings.

Make sure you have written everything correctly and run the code using the `v run .` command.

{{<image src="/images/how-to-write-a-simple-v-application-step-by-step/3.png"
alt="Screenshot showing the IDE with code and output with the total number of V repositories.">}}

Let us display the list of repositories.

## Display everything beautifully

All we need to do is iterate over the `items` array and output information about the repositories.
V provides a
[for loop](https://docs.vosca.dev/concepts/control-flow/loops.html#array-for)
for this, which makes it easy to iterate through all the elements of the array.

```v
for index, repository in repositories_result.items {
	// ...
}
```

If we do not need an `index`, we can simply omit it.

Now we need to display everything beautifully.
But we will do it beautifully in the truest sense of the word.
Let us not complicate this article by searching for a suitable module.
I chose everything in advance.
For color text output in the terminal, we will use the
[Mewzax.chalk](https://github.com/Mewzax/chalk)
module.

> The standard library already contains the
> [`term`](https://modules.vosca.dev/standard_library/term.html)
> module, which allows you to display colored text in the terminal, but I thought it would be more
> interesting to show how to use a third-party module.

Let us use the
[built-in package manager](https://docs.vosca.dev/concepts/package-management.html)
V to install it:

```shell
v install Mewzax.chalk
```

You can find the module README
[here](https://github.com/mewzax/chalk/blob/master/README.md).

Now import it:

```v skip
import mewzax.chalk
```

And write the formatted output of repositories inside the body of the `for` loop:

```v skip
for index, repository in repositories_result.items {
	colored_description := chalk.fg(repository.description, 'cyan')
	colored_star_count := chalk.fg(repository.stargazers_count.str(), 'green')

	println('#${index + 1} ${repository.full_name}')
	println('  URL: ${repository.html_url}')

	if repository.description != '' {
		println('  Description: ${colored_description}')
	}

	println('  Star count: ${colored_star_count}')
}
```

The `if repository.description != ''` condition was added in case there is no description in
the repository, so we don’t output an empty string.

Run the code and look at the result.

{{<image src="/images/how-to-write-a-simple-v-application-step-by-step/4.png"
alt="Screenshot showing the IDE with code and output of the final version utility">}}

## Conclusion

From the obtained results, we can conclude that the top 3 projects on V by stars are now:

1. [cotowali/cotowali](https://github.com/cotowali/cotowali) --
   A statically typed scripting language that transpiles into POSIX sh.
2. [nedpals/vex](https://github.com/nedpals/vex) --
   Easy-to-use, modular web framework built for V.
3. [elliotchance/vsql](https://github.com/elliotchance/vsql) --
   Single-file or PostgreSQL-server compatible transactional SQL database
   written in pure V.

## Homework

1. Try using search filters or the GitHub code to exclude V organization repositories so that you
   can only see community projects.
2. Create a separate
   [function](https://docs.vosca.dev/concepts/functions/overview.html)
   for fetching data from the GitHub API, where the sorting type and order can be passed as
   arguments.

You can ask questions or share the results of your work in the comments below, or in
[Discord](https://discord.gg/vlang).

Source code: https://github.com/vlang-association/v-tutorial-stars