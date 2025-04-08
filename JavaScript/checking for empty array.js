let myArray = []

// Array has length property
console.log(myArray.length);

// mistake made too often
console.log(myArray.length ? true : false);

// Here's why
// myArray = undefined // same if null
// Error:
// console.log(myArray.length ? true : false);

// So we have learned to do this: but there is a better and consize way
console.log(myArray && myArray.length ? true : false);

// optional chaining operator
console.log(myArray?.length ? true : false);