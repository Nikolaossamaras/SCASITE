let attempts = 0;
let answer;
let maxNum;
let minNum;
const result = document.getElementById('result');

function generate(){
    minNum = Number(document.getElementById('min').value);
    maxNum = Number(document.getElementById('max').value);
    if(maxNum < minNum){
        result.textContent = "Your min number must be less than your max number";
    }else{
        answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
        attempts = 0;
        result.textContent = "Number generated! Start guessing.";
    }
}

function guess(){
    const guessValue = Number(document.getElementById('guess').value);
    if(guessValue < minNum || guessValue > maxNum){
        result.textContent = "Your number is out of bounds";
    }else{
        attempts++;
        if(guessValue < answer){
            result.textContent = "TOO LOW! TRY AGAIN!";
        }else if(guessValue > answer){
            result.textContent = "TOO HIGH! TRY AGAIN!";
        }else{
            result.textContent = `CORRECT!!! You got it in ${attempts} tries.`;
        }
    }
}

document.getElementById('guess-btn').addEventListener('click', guess);
