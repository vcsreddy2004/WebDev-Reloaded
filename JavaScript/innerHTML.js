const initApp = () => {
    document.querySelectorAll("input")[0].addEventListener("click",throughInnerHTML);
    document.querySelectorAll("input")[1].addEventListener("click",throughFragment);
}
document.addEventListener("DOMContentLoaded",initApp);
let throughInnerHTML = () => {
    let start = new Date();
    let main = document.querySelector("#main");
    for(let i=0; i<10000; i++) {
        main.innerHTML += `this is line ${i}`;
    }
    const duration = new Date()-start;
    console.log(duration);
}
let throughFragment = () => {
    let start = new Date();
    let main = document.querySelector("#main");
    let fragment = document.createDocumentFragment();
    for(let i=0; i<10000; i++)
    {
        let p = document.createElement("p");
        p.textContent = `this is line ${i}`;
        fragment.appendChild(p);
    }
    main.appendChild(fragment);
    let duration = new Date() - start;
    console.log(duration);
}