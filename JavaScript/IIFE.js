// IIFE - Immediately-Invoked Function Expression

// Pronounced 'IIFY' by Ben alman who introduced the acronym

// variations:

// with anonymous arrow function inside.
(()=>{
    console.log("arrow function veriation");
})(); // this last paranthesis () is mandatory to run this function. we can pass parameters here.

(function() {
    console.log("function keyword variation");
})();

// This can calls itself multiple times but once process complete you can no longer call function again.
(function myIIFE() {
    num++;
    console.log(num);
    return num !==5 ? myIIFE(num) : console.log("finished");
})(num=0);  

// myIIFE(num=0); // no longer run after completion of run


// issolate decalrations within the function
const X = "outside IIFE";

const helloWorld = () => "function outside IIFE";

(()=> {
    const X = "Inside IIFE";
    const helloWorld = () => "function inside IIFE";
    console.log(X);
    console.log(helloWorld());
})();
console.log(X);
console.log(helloWorld());

// Reasons for IIFe function
// 1) Dose not pollute the global object namespace
// 2) Private variables and methods from Closure