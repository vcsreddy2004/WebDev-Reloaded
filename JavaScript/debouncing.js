// Function debouncing is a concept that delays the execution of a function
// this allows us to block unfortuante double or multiple clicks. (multiple submitions to APIS).

window.addEventListener("load",()=> {
    let btn = document.querySelector("#btn");
    let btn2 = document.querySelector("#btn2");
    let btn3 = document.querySelector("#btn3");
    btn.addEventListener("click",()=>{
        clicking();
        btn.disabled = true;
        setTimeout(()=> {
             btn.disabled = false;
        },3000);
    });
    let debounceValue = (debounce(functionsWithArguments,5000));    
    btn2.addEventListener("click",()=>{
       debounceValue(2,3);
    });
    let debounceWithPromise = debouncePromise(functionsWithArgumentsAndREturn,5000);
    btn3.addEventListener("click",()=>{
        debounceWithPromise(2,3).then((res)=>{
            console.log(res);
        });
    })
});
let clicking = () => {
    console.log("clicked");
}
let functionsWithArguments = (a,b) => {
    console.log(a+b)    ;
}
let functionsWithArgumentsAndREturn = (a,b) => {
    return a+b;
}
// anotheer way
const debounce = (fn,delay) => {
    let id;
    return (...args) => {
        console.log(`previous id ${id}`);
        if(id) clearTimeout(id);
        id = setTimeout(()=>{
            fn(...args);
        },delay);
    }
}

// Debouncing wih with promises
const debouncePromise = (fn,delay) =>{
    let id;
    return (...args) => {
        console.log(`debouncing with promise ${id}`);
        return new Promise((resolve)=>{
            let resolvedPromise = resolve;
            if(id) clearTimeout(id);
            id = setTimeout(()=>{
                resolvedPromise(fn(...args));
            },delay);
        });
    };
}