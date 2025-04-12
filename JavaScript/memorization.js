// momorise used to store data in cache format to avoid multiple hits to API server
// it takes more memory but less time as we no need to hit server always for same input
// it have to apply for pure function (same output for same input)  
const initApp = () =>{
    console.log(multiplyBy10(10));
    console.log(multiplyBy10(10));
    console.log(multiplyBy10(10));
    let memorisedFunction = memorisedMultiplyBy10();
    console.log("using memory to save time");
    console.log(memorisedFunction(10));
    console.log(memorisedFunction(10));
    console.log(memorisedFunction(10));
    console.log(memorisedFunction(50));
    console.log(memorisedFunction(50));
    console.log(memorisedFunction(50));
    console.log("passing custom functions in memorization");
    let memorisedCustomFunc = memorise(addMultipleNums);
    console.log(memorisedCustomFunc(3,4,5));
    console.log(memorisedCustomFunc(3,4,5));
    console.log(memorisedCustomFunc(7,8,10,5,7));
    console.log(memorisedCustomFunc(7,8,10,9));
}
const multiplyBy10 = (num) => {
    return num*10;
}
const addMultipleNums = (...nums) => {
    return nums.reduce((acc,cur)=>acc+cur,0);
}
const memorisedMultiplyBy10 = () => {
    let cache = {};
    return (num) =>{
        if (num in cache) {
            return cache[num];
        }
        let result = num*10;
        cache[num] = result;
        return result;
    }
}
const memorise = (fn)=>{
    let cache = {};
    return (...args) => {
        if(args.toString() in cache) {
            return cache[args.toString()]
        }
        let result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}
initApp();