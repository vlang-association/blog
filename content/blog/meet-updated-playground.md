---
title: "Meet updated Playground"
subtitle: Brief overview of the new features of the Playground
summary: ""
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Announcements" ]
date: 2023-04-17T00:00:01+04:00
image: images/meet-updated-playground/cover.png
---

After V first release, Playground was located at
[vlang.io/play (archive.org link, August, 25, 2019)](https://web.archive.org/web/20190825140332/vlang.io/play),
it was simple, with several examples.

The next version of playground was already located at
[play.vlang.io (archive.org link, September, 22, 2021)](https://web.archive.org/web/20210922135352/http://play.vlang.io/).
In this version, user can change the theme, make the code smaller or larger.

This playground
[returned to online](https://twitter.com/v_language/status/1583480823151329280)
October, 21 2022.

It had problems, from a slow and inconvenient editor to a look I did not like.
In two days I updated appearance, improved editor, and on October 25, 2022, the new
playground was
[launched](https://discord.com/channels/592103645835821068/592723761812209664/1034225971324256319).

Since then, playground has not changed much, and its version on
[play.vlang.io](https://play.vlang.io)
remained almost the same as it was after my redesign.

At some moment, playground was built under WASM, allowing the code to run directly in the browser
without having to send it to the server.
It’s still opening, but it’s not working for me.
It can be found at [v-wasm.vercel.app](https://v-wasm.vercel.app).

## Embeddable playground

Back in early 2023, I had the idea to make an embedded playground that could easily be integrated
into any site, such as documentation or blog.

This is a separate project that can be found on GitHub:
[vlang-association/playground-component](https://github.com/vlang-association/playground-component)

You could already see it in action in the documentation or blog:

```v {play=true}
fn main() {
    println('Hello, playground!')
    println('Try to change the code and run it again!')
}
```

Thanks to it, we made our blog and documentation interactive!

## New Playground

In parallel with the creation of VOSCA, we started the process of transferring playground to our
site.

We have rewritten all backend, improved language support in the editor, added the ability to view
generated C code, as well as the ability to pass the parameters of compilation and program
launch.
Playground can now work with base64 encoded code and GitHub Gists code.
The new playground also now can check the output of the program to match the output that was
passed as the expected output.
This is a useful feature for creating interactive lessons.

We also changed the look to better match the VOSCA style.

The new playground also updates the V version every 6 hours to always use the latest version of the
language.

The new version is also better optimized for mobile devices, allowing you to use playground on your
phone.

Playground now has [documentation](https://docs.vosca.dev/tools/playground.html) where we collected
all the information about it.

### Show generated C code

The main feature of the new playground is the ability to view generated C code.
In this mode, the editor window opens to the right where you can view the generated C code.

{{< image src="/images/meet-updated-playground/cgen.png"
alt="Screenshot showing the C generated mode of Playground" >}}

By clicking on the lines in the V code editor, the corresponding line will be highlighted in the C
code editor.
You can learn more about this feature in
[documentation](https://docs.vosca.dev/tools/playground.html#show-generated-c-code).

### Afterword

We hope that the new playground will be useful for anyone who wants to try V or just practice it.
The ability to see generated C code will make finding some bugs in code generation much easier!

If you have any suggestions for improving playground, we will be glad to hear about them here in the
comments, in
[issues](https://github.com/vlang-association/playground/issues)
on GitHub or in
[Discord](https:///discord.gg/vlang).
