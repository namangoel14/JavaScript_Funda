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
 
 In Arrow function we can't do the hoisting, because the function assign to a variable. 

 like:
 a(); // not a function.
 let a = () => {
    setTimeout(()=> {console.log("Arrow Function printing after 5 seconds.");},5000)
 }

- # How Javascript program works ?

There is a call stack in browser which stores and execute the multiple execution context and variable to smoothen the process. 

-> First the GEC(Global Execution Context) will create it then step by step Execution context will start executing, and at the end every Eexecution Context will remove or delete from call stack after thier's execution is completed and GEC delete it as well after every execution is completed.

- # What is the shortest program in Javascript?

-> It is an empty .js file.

Like: 
empty.js


When we run this file a GEC will create it.
JRE stores the empty file data into GEC context which create a Global variable. 

Global variable or Global Object is non other than window in browser or this keyword.

(This === window) -> true.

So when Global object is create it, a Global Execution Context is create it along with this Execution context is create it and this keyword also create it. 

Note- Javscript can run anywhere not only in the browser. So in the browser, the Global object is window, for other it will be different. 

-> Global Space: 
Global space is something which any variable is define outside the function of that particular file in Global world. 

Like: 

variable.js

let a = 1;

function b(){
    let x = 1;
    
}

console.log(a); // In a Global Space
console.log(b); // Not in a Global Space.

- # undefined and not defines.

-> undefined:
undefined is when we defined a variable but not assign any value to it but trying to print the variable at the top or bottom to its definition then javascript run engine will tell you that this is undefined, Global object will store the variable inside its memory and assign a value called undefined if any other value is not assigned to it. 

Like: 

undefined.js

 console.log(a);  // undefined
 let a;
 console.log(a);  // undefined
a = 1;
console.log(a); // 1

-> not defined

If we try to access any variable or function which is not present inside the javscript file then JRE will throw an error called variable is not defined. 

Like: 

notDefined.js

let a = 10;

console.log(x); // x is not defined.

Note: Javascript is the loosely type language or weakly type language.
Because After defining a variable we can assign any integer, string or boolean value to it. 
It is very flexible in nature. 

And, 
Never use undefined as a logic in javascript code, It is very unprofessional and bad pratice to use it any program, it is not recommended. 

like: 

program.js

let a; 

if(a === undefined){                 // Never recommended to use undefined like this. 
    console.log("It is undefined");
}else {
    console.log("IT is defined");
}

output: 

It is undefined. 