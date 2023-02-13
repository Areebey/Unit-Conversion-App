/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl=document.getElementById("convert-btn")

function convertUnits(){

let inputEl=document.getElementById("field").value


    let result1=parseFloat(inputEl*3.281).toFixed(2);
    let result01=parseFloat(inputEl/3.281).toFixed(2)
    document.getElementById("meter-feet").innerHTML=inputEl+" meters"+" = "+result1+
    " feets"+" | "+inputEl+" feets"+" = "+result01+" meters";
   
    let result2=parseFloat(inputEl*0.264).toFixed(2);
    let result02=parseFloat(inputEl/0.264).toFixed(2);
    document.getElementById("liter-gallon").innerHTML=inputEl+" liters"+" = "+result2+
    " gallons"+" | "+inputEl+" gallons"+" = "+result02+" liters";

    let result3=parseFloat(inputEl*2.204).toFixed(2);
    let result03=parseFloat(inputEl/2.204).toFixed(2);
    document.getElementById("kilogram-pound").innerHTML=inputEl+" kilograms"+" = "+result3+
    " pounds"+" | "+inputEl+" pounds"+" = "+result03+" kilograms";

}