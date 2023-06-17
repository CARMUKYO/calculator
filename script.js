const numbers = document.querySelectorAll(".number");
const dot = document.getElementById(".");
const operators = document.querySelectorAll(".operators");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const backSpace = document.getElementById("back");
const solution = document.getElementById("solution");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".button");

let firstNumber = 0;
let operator ="";
let secondNumber = 0;
const displayArray = [];
solution.textContent ="";
result.textContent = "";

numbers.forEach((num) =>{
    num.addEventListener("click", addNumber);
});

operators.forEach((operator) => {
    operator.addEventListener("click", setOperator);
});

equal.addEventListener("click", evaluateEquation);
clear.addEventListener("click", clearCal);
dot.addEventListener("click", addNumber);
backSpace.addEventListener("click", backFunction);

function addNumber(n){
    displayArray.push(n.target.id);
    result.textContent = displayArray.join('');
}

function setOperator(n){
    operator = n.target.id; 
    firstNumber = result.textContent;
    solution.textContent = firstNumber; 
    displayArray.length = 0;
}

function evaluateEquation(){
    if(solution.textContent === ""){
        return;
    }
    secondNumber = result.textContent;
    solution.textContent = firstNumber + operator + secondNumber;
    result.textContent = operate(firstNumber,secondNumber,operator);
}


function add(firstNumber,secondNumber){
    return Number(firstNumber) + Number(secondNumber);
}

function subtract(firstNumber,secondNumber){
    return Number(firstNumber) - Number(secondNumber);
}

function mutiply(firstNumber,secondNumber){
    return Number(firstNumber) * Number(secondNumber);
}

function divide(firstNumber,secondNumber){
    if (Number(secondNumber) === 0) {
        return "ERRORRRRRRRRRRRR";
    }
    return Number(firstNumber) / Number(secondNumber);
}

function operate(firstNumber,secondNumber,operator){
    if(operator === "+"){
        return add(firstNumber,secondNumber);
    }else if(operator === "-"){
        return subtract(firstNumber,secondNumber);
    }else if(operator === "*") {
        return mutiply(firstNumber, secondNumber);
    }else if(operator === "/"){
        return divide(firstNumber, secondNumber);
    }   
}

function clearCal(){
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    displayArray.length = 0;
    solution.textContent = "";
    result.textContent = "";
}

document.addEventListener('keydown', takeKeyboardInput);
function takeKeyboardInput(n){
    buttons.forEach((button) => {
        if (button.id == n.key) {
            document.getElementById(button.id).click();
        }
    });
    if(n.key == 'Enter') {
        evaluateEquation();
    }else if(n.key == "c"){
        clearCal();
    }else if(n.key == "Backspace"){
        backFunction();
    }
}

function backFunction(){
    if (displayArray.length > 1) {
        displayArray.pop();
        result.textContent = displayArray.join('');
        } else {
            displayArray.length = 0;
            result.textContent = "0";
        }
}