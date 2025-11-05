# JavaScript_Funda
This repository is for learning the fundamentals and deep concepts of JavaScript.

# Execution Context

Everything in javascript happends inside the execution context.

In Execution context, There are 2 phases:

- Variable Enviornement (Memory Phase/component)
- Thread of Execution (Code Phase/component)

Note: For the multiple Execution context processes to handle there is Call Stack for multiple cases in javascript or browser.

Call stack maintains the order of execution for Execution Context. 

Call stack also known or called as,
- Execution Context Stack
- Program Stack
- Control Stack
- Runtime Stack
- Machine Stack

# Hoisting

Hoisting is when variable and functions declaration moved to the top of there containing scope into the compilation phase and execution phase remain same.

It means we can declare the variable and function before the intialization of there scope.

Example: 

In var variable case: 

Without Hoisting - 
var  = 2;
console.log(x);

With Hoisting: 

console.log(x);
var x = 2;

In let and const variable case: 

The hoisting is possible but the declaration should only works when initialization happen before, Otherwise browser will throw an reference error.

- # Function Hoisting

In this, Function can call before the function scope like below:

greet();

function greet() {
    console.log("Hello!");
}

- # Arrow Function: 
 
 