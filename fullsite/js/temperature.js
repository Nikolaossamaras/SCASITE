const textbox = document.getElementById('textBox');
const toFah = document.getElementById('toFah');
const toCel = document.getElementById('toCel');
const result = document.getElementById('result');
let temp;

function convert(){
    if(toFah.checked){
        temp = Number(document.getElementById('textBox').value)*9/5 +32;
        result.textContent =temp.toFixed(1)+" °F";

    }
    else if(toCel.checked){
        temp = (Number(document.getElementById('textBox').value) - 32) * 5/9;
        result.textContent =temp.toFixed(1)+" °C";
    }else{
        result.textContent ="Please select a unit to convert to.";
    }

}
