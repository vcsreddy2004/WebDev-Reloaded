// Pure function 

// A part of the functional programming paradigm

// why pure fuction ?
// 1) Clean code
// 2) Easy to test
// 3) Easy to debug
// 4) Decompled and Independent
// 5) Could be added to your utility functions

// Rules for Pure function
// 1) The same input ALWAYS gives the same output
// 2) No side effects
    // this means accessing the scope outside the function makes the function impure


const add = (a,b) => a+b
console.log(add(2,3)); // for same input there always be same output

// A pure function should have at least one parameter.
// Otherwise. It is the same as a constant because they can only change with their input
// A pure function can not access a database, AIP, file system, storage, etc...
// They can not modify the DOM
// They can no log to function

const name = () => "chandu"
console.log(name());

// Rule 2 violation
const constant = 5;
const sum = (a,b) => constant+a+b;
console.log(sum(2,3));