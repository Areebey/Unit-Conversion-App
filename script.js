/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl=document.getElementById("convert-btn")
let inputEl=document.getElementById("field")

convertEl.addEventListener("click",function(){
    console.log("Button click")

    inputEl.textContent = "22";
})