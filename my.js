let bodyElement = document.querySelector("body")
function chooseDark(){
    bodyElement.classList.remove("light");
    bodyElement.classList.add("dark");
}
function chooseLight(){
    bodyElement.classList.remove("dark");
    bodyElement.classList.add("light");
}
if (new Date().getHours() >= 17 && new Date().getMinutes() >= 57) {
    chooseDark();
} 
else {
    chooseLight();
}
// agr 20 baj chukay hain toh chooseDark() warna chooseLight()
// agr hours 17 ya us se ziada AND minutes 50 ya us se ziada
//  baj chuke hain toh chooseDark() warna chooseLight() 
// newDate().getHours >=
// new Date().getMinutes