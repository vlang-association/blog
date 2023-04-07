---
title: "Using C code in V. Part 2: Hello, C code"
subtitle: Learn how to look generated C code from V
summary: Learn how to use C code in V
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Tutorials", "V and C" ]
date: 2023-03-17T09:34:23+04:00
image: images/v-and-c-2/v-and-c-2.png
---

In the [previous article](/c-from-v-1), we looked at how to use functions from C code. Today we
will look at C code.

Last time, we created a static library from C code. However, V can also work
with object files directly.
Let's look at **fib.v** file again:

```v
module fib

#flag -L @VMODROOT/c/
#flag -lfib
#flag -I @VMODROOT/c/
#include "fib.h"

fn C.fib(num int) int

pub fn fib(num int) int {
	return C.fib(num)
}
```

Instead of linking a library, you can write the path to an object file:

```v
module fib

#flag @VMODROOT/c/fib.o
//    ^^^^^^^^^^^^^^^^^ path to object file
#flag -I @VMODROOT/c/
#include "fib.h"

fn C.fib(num int) int

pub fn fib(num int) int {
	return C.fib(num)
}
```

After compiling, you will get the same result. When V compiles the code, it will
pass the necessary paths to the C compiler, just as it does for libraries.

What's more, with the `#flag` directive, you can pass a C file directly and it
will work:

```v
module fib

#flag @VMODROOT/c/fib.c
#flag -I @VMODROOT/c/
#include "fib.h"

fn C.fib(num int) int

pub fn fib(num int) int {
	return C.fib(num)
}
```

This is useful if you need to include a single file without having to create a
library or object file.

## Useful flags

When you're working with C code, it's useful to know exactly how V compiles your
code with the C compiler, as well as what code V produces.

### `-showcc`

Shows all options that will be passed to the C compiler.
Let's try to build with this flag and see what it produces:

```shell
v -showcc .
```

output:

```text
> C compiler cmd: 'cc' '@/tmp/v_501/c_from_v.14958817527713629059.tmp.c.rsp'
> C compiler response file "/tmp/v_501/c_from_v.14958817527713629059.tmp.c.rsp":
   -std=c99
   -D_DEFAULT_SOURCE
   -D GC_BUILTIN_ATOMIC=1
   -D MPROTECT_VDB=1
   -D GC_THREADS=1
   -I ".../v/thirdparty/libgc/include"
   -I ".../c_from_v/c"
   -x objective-c
   -x none
   -mmacosx-version-min=10.7
   -ldl
   -lpthread
   -o ".../c_from_v/c_from_v"
   ".../v/thirdparty/tcc/lib/libgc.a"
   ".../.vmodules/cache/cf/f1d.module.fib.o"
   "/tmp/v_501/c_from_v.14958817527713629059.tmp.c"
```

I formatted it to make it more pleasant to work with.

V passes many flags, but we're interested in a few; the **.tmp.c** file, for
example, describes the path to a C-generated file, which we'll look at later.

**f1d.module.fib.o** is the path to the object file we passed earlier, V cached
it and moved it to its folder.

If you compile the program with this flag when we passed the path to the
library, then the lines will be added there:

```text
-L ".../c_from_v/c"
-lfib
```

Which we described in the **fib.v** file.

### `-keepc`

We've already seen that the output with the `-showcc` flag shows us the path to
the C file, but by default it is removed after compilation so that it is not
deleted by passing the `-keepc`flag.
It will also make the path to the C file always the same, which is useful when
the file is open in the editor.
Usually, when you're working with C code, these two flags should be used
together.

### `-o file.c`

You can also compile V code directly into a C file using the `-o` flag. The
resulting file will be the same as the one obtained from the path in the output
with the `-showcc` flag.

These aren't all the flags that are available for the C backend.
You can see all with the following command:

```shell
v help build-c
```

## Generated C code

When you're working at the intersection of V and C, looking at the resulting C
code can be very useful. V was originally designed to produce readable C code
that can be read and easily modified for debug.

When you first open the generated file, it may seem scary and very large to you,
but this is only at first glance.

Let's open the generated file for our example above.

To find our code that we wrote in the `main` function, just find the function
named `main_main`:

```c
VV_LOCAL_SYMBOL void main_main(void) {
	println(int_str(fib__fib(10)));
}
```

It's quite simple, isn't it?

Here we see a call to the builtin `println` function, a function to convert a
number to a string, and our function to calculate the fibonacci number.

As you can see, the `fib` function from the `fib` module has become
the `fib__fib` function, V uses the fully qualified name `fib.fib` and replaces
dots with two underscores, so if you see a symbol like `X__Y`, then X is the
module name and Y is the symbol name. Now it makes sense why the `main` function
from `main`module became `main__main` doesn't it?

Let's see what code was generated for the `fib` function:

```c
int fib_fib(int num) {
	int_t1 = fib(num);
	return_t1;
}
```

V code:

```v
pub fn fib(num int) int {
	return C.fib(num)
}
```

Pretty similar, only in C there is an additional variable that will be optimized
by the C compiler.

If you try, you won't find the definition of the `fib` function in the file,
because its definition is in the file **c/fib.h** that was included in this C
file.

You can try to find this `include` in the file:

```c
#if __has_include("fib.h")
	#include "fib.h"
#else
#error VERROR_MESSAGE Header file "fib.h", needed for module `fib` was not found. Please install the corresponding development headers.
#endif
```

V inserts additional checks for file inclusions to give errors early on when the
code is only compiled and not linked.

You can try to modify the resulting C code, compiling it into a binary file is
very easy, just take the output with the `-showcc` flag and execute it in the
terminal.
