/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl=document.getElementById("convert-btn")
let inputEl=document.getElementById("field")

convertEl.addEventListener("click",function(){
    console.log("Button click")
inputEl=document.getElementById("field").value
    inputEl.textContent = 22;
})


// ----------------------------------------------------------
(() => {
    let inputText = document.getElementById('text');
    let submitBtn = document.getElementById('submit');
    let triggerJSBtn = document.getElementById('button');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // just prevent form submitted.
    });

    triggerJSBtn.addEventListener('click', (event) => {
        const thisTarget = event.target;
        event.preventDefault();
        inputText.value = thisTarget.innerText;
        inputText.dispatchEvent(new Event('input'));
        inputText.dispatchEvent(new Event('change'));
    });

    inputText.addEventListener('beforeinput', (event) => {
        const thisTarget = event.target;
        console.log('beforeinput event. (%s)', thisTarget.value);
    });

    inputText.addEventListener('input', (event) => {
        const thisTarget = event.target;
        console.log('input event. (%s)', thisTarget.value);
    });

    inputText.addEventListener('change', (event) => {
        const thisTarget = event.target;
        console.log('change event. (%s)', thisTarget.value);
    });

    inputText.addEventListener('cut', (event) => {
        const thisTarget = event.target;
        console.log('cut event. (%s)', thisTarget.value);
    });

    inputText.addEventListener('copy', (event) => {
        const thisTarget = event.target;
        console.log('copy event. (%s)', thisTarget.value);
    });

    inputText.addEventListener('paste', (event) => {
        const thisTarget = event.target;
        console.log('paste event. (%s)', thisTarget.value);
    });
})();