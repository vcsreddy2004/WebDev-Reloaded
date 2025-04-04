// Resons to use recursions
    // 1) Less code
    // 2) Elegant code (pleasing to look at)
    // 3) Increase readability

const recurTen = (num=1) => {
    if(num>10) return;
    console.log(num);
    num+=1;
    return recurTen(num);
}
recurTen();
const fib = (num,array = [0,1]) => {
    if(num<=2) return array;
    const [nextToLast,last] = array.slice(-2);
    return fib(num-1,[...array,nextToLast+last]);
}
console.log(fib(9));