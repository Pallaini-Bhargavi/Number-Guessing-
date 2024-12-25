let minnum=1;
let maxnum=100;
let answer = Math.floor(Math.random() * (maxnum-minnum)+minnum);
let attempts = 0;
function guessing(){
    const textInput = document.getElementById("text");
    const mylabel = document.getElementById("mylabel");
    let guess = Number(textInput.value);
    if(isNaN(guess)){
        mylabel.textContent = "Please enter a valid number";
        mylabel.style.color = "red";    
        return;
    }
    if(guess < minnum || guess > maxnum){
        mylabel.textContent = "Please enter a valid number";
        mylabel.style.color = "red";
        return;    
    }

        attempts++;
        if(guess < answer){
            mylabel.textContent = "Too low ! Try Again";
            mylabel.style.color = "orange";
        }
        else if (guess > answer){
            mylabel.textContent = "Too High ! Try Again";
            mylabel.style.color = "blue";
        }
        else{
            mylabel.textContent = `GREAT ! Your guessing takes ${attempts} attempts...`
            mylabel.style.color = "green";
            document.getElementById("button").disabled = true;
            textInput.disabled = true;
        }
    
}

function resetGame() {
    attempts = 0;
    answer = Math.floor(Math.random() * (maxnum - minnum + 1) + minnum);
    const textInput = document.getElementById("text");
    const mylabel = document.getElementById("mylabel");
    textInput.value = "";
    mylabel.textContent = "Start guessing a number!";
    mylabel.style.color = "black";
    textInput.disabled = false;
    document.getElementById("button2").disabled = false;
}