let bodyElement = document.querySelector("body")
function chooseDark(){
    bodyElement.classList.remove("light");
    bodyElement.classList.add("dark");
}
function chooseLight(){
    bodyElement.classList.remove("dark");
    bodyElement.classList.add("light");
}
