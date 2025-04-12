const initApp = () => {
    let text = document.querySelector("#text");
    document.querySelector("#nonSanitized").addEventListener("click", () => nonSanitised(text.value));
    document.querySelector("#sanitized").addEventListener("click", () => sanitised(text.value));
}
document.addEventListener("DOMContentLoaded",initApp);
const nonSanitised = (text) => {
    let para = document.querySelector("#para");
    para.innerHTML = text;
}
const sanitised = (text) => {
    let para = document.querySelector("#para");
    para.textContent = text;
}