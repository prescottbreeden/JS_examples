#ECMAScript Engines
  - Chakra (IE/Edge)
  - SpiderMonkey (Firefox)
  - JavaScriptCore (Safari)
  - V8 (Chrome)

##V8 was released in 2008
  - Google Maps needed more power

## Who Wrote the First JavaScript Engine
  - Brendan Eich
  - Netscape -- became the first version of SpiderMonkey
  - 1995 -- dawn of the "browser wars"

### Engine process
  - Parse code
  - Abstract Syntax Tree (AST Explorer)
  - Interpreter --> Bytecode
  - Profiler
  - Compiler --> Optimized code

-----

#Interpreters and Compilers

## Interpreter
  - translate and read the file line by line and runs it

## Compiler
  - optimizes the code and runs it

## JIT Compiler (Just in Time)
  - mixture of an interpreter and compiler
  - replaces interpreted code with optimized compiled code over time during
    run time

## How to love the compiler
  - eval()
  - arguments
  - for in
  - with
  - delete

  This is because of Inline caching and hidden classes

----

# Why not just write machine code from the beggining?

----

# Call stack || Memory Heap

## Heap is a place to store and write programs
  - Where memory allocation happens
  - is unorganized... i.e. it is a heap!

## Stack is a place to keep track of where we are in the code
  - Tracks the runtime


### Garbage Collection
  - automatic freeing of memory from variables no longer needed
  - goal is to prevent memory leaks (gradual absorption of available memory)
  - JavaScript uses a Mark and Sweep algorithm
    ... if nothing is pointing to something in memory - mark it, sweep it

    e.g.
    let array = [];
    for (let i = 5; i > 1; i++) {
      array.push(i-1);
    }
  
  - memory leaks are previously allocated addresses in memory that have not
    been reallocated

----

# Single Threaded
  - Has one call stack
  - Made things super easy in the beggining
  - One handed food chewing

## Problem with synchronous code?
  - singly threaded code will suffer from long tasks

## JavaScript Runtime
  - Call Stack : Web API : Callback Queue
  - Web API comes with the browser based on their implementaion of their JS
    runtime
  - Window object: e.g. fetch, indexedDB, setTimeout, setInterval, session
    ... browsers perform these in low-level languages like c++

## Node
  - written in c++
  - global object
  - before node.js, languages like php allocate a new thread for every server
    request - (concurrency is a major issue and server is more vulnerable to a 
    slow loris attack)
  - node.js is still single threaded so it uses it's callback queue to handle
    concurrent requests - (why sockets are so powerful in Node)