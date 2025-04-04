// Lexical Scope defines how variables names are resolved in nested functions.
// Nested (child) functions have access to the scope of their parent function

// Lexical scope looks to be similer with closures but there is a bit difference

// A closure is a function having access to the parent scope, "even after the parent function has closed."

// A closure is created when we define a function, not when a function is executed.
    // in the fallowing example ChildFunction is defined in ParentFunction so it has access to parent function scope and also global scope
// global scope 
let globalValue=1;
// const ParentFunction = () => {
//     // local scope
//     let parentValue = 5;
//     console.log(globalValue);
//     console.log(parentValue);
//     const ChildFunction = () => {
//         console.log(globalValue+1);
//         console.log(parentValue+1);
//     }
//     ChildFunction(); // child function has access to scope parent function and global scope this is called as Lexical scope
// }
// ParentFunction();
const ParentFunction = () => {
    let parentValue = 5;
    console.log(globalValue);
    console.log(parentValue);
    const ChildFunction = () => {
        console.log(globalValue+=5);
        console.log(parentValue+=5);
    }
    return ChildFunction;
}
const result = ParentFunction();
result(); // output of parent function stored in result variable no matter how many times you call 
result(); 
console.log(globalValue);


// IIFE (Immediately Invoked Function Expression)
const privateCounter = (()=>{
    let count = 0;
    console.log(`Initial Value ${count}`);
    return () => {
        count++;
        console.log(count);
    }
})();

privateCounter();
privateCounter();
privateCounter();

// another example of IIFE

const credit = ((num)=>{
    let credits = num;
    console.log("start the game")
    return () => {
        credits-=10;
        if(credits >=0) {
            console.log("lets play")
        }
        else {
            console.log("no more credits to play");
        }
    }
})(30); // paraameter is stored in num variable

credit();
credit();
credit();
credit();
credit();