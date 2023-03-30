---
title: "Using C code in V. Part 1: Hello, Fibonacci"
subtitle: Learn basics how to use C code in V with Fibonacci example
summary: Learn how to use C code in V
page: Blog
authorname: Petr Makhnev
authorlink: petr-makhnev
categories: [ "Tutorials", "V and C" ]
date: 2023-03-10T09:34:23+04:00
image: images/default-image.png
---

Due to the fact that the main backend for V is C, it is very easy to use any libraries written in C.

## Preparation

### Preparing and compiling the C library

Suppose we have a library that implements the calculation of Fibonacci numbers, the files of which are in the **c**
folder in the project folder:

**c_from_v/c/fib.c**:

```c
#include "fib.h"

int fib(int num) {
     if (num < 2) {
         return num;
     }

     return fib(num - 1) + fib(num - 2);
}
```

**c_from_v/c/fib.h**

```c
#ifndef FIB_H
#define FIB_H

int fib(int number);

#endif //FIB_H
```

Let's compile it into a static library:

```c
cd ./c
clang -c -o fib.o fib.c -fPIC
ar r libfib.a fib.o
```

Now, all we need to use this library is the **fib.h** file and the resulting **libfib.a** library.

#### Creating a project skeleton

After the library is created, let's create a file **main.v** in the root of the project, which will be the entry point
of our program in V.

**c_from_v/main.v**

```v
module main

fn main() {
	println("Hello C!")
}
```

We could include the C library directly in this file, but then it would be difficult to reuse it.

Let's create a separate module, which we will call `fib`. Let's create a folder **fib** and create a file **fib.v** in
it:

```v
module fib
```

This file will contain all the necessary declarations for calling the C function.

## Call C function from V

Finally, we're ready to call our function from C.

To do this, in V you can define functions/structures with a special `C.` prefix:

**c_from_v/fib/fib.v**

```v
module fib

fn C.fib(num int) int
```

This declaration tells the compiler that the function will be obtained from outside sources. 
In fact, this is equivalent to the pre-definition of a function in C.

Now we need to tell the V compiler where to look for the function definition.

V provides a handy constant: `@VMODROOT` , which is replaced by the path to the nearest **v.mod** file, which can be
considered the root of the project.

Let's add an empty **v.mod** file to the root of the project: **c_from_v/v.mod**.

Add the following flags to the beginning of the **fib.v** file:

```v
module fib

#flag -L @VMODROOT/c/
#flag -lfib
#flag -I @VMODROOT/c/
#include "fib.h"

fn C.fib(num int) int
```

The first flag specifies the paths where to look for libraries, and the second specifies the name of the library we want
to use. The third flag tells where looking for header files for our library, and the fourth flag tells the compiler which
header file contains our function definitions.

Thus, we told the V compiler where to get the definitions and implementation of functions.

Let's add a wrapper for our function, for more convenient use:

**c_from_v/fib/fib.v**

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

Now everything is ready to call the function in the file **c_from_v/main.v**:

```v
module main

import fib

fn main() {
	println(fib.fib(10))
}
```

Compile and run:

```
v run .
```

Output:

```
55
```

