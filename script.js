const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const solution = document.getElementById("solution");
const result = document.getElementById("result");


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
    secondNumber = result.textContent;
    solution.textContent = solution.textContent + operator + secondNumber;
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
        return "Infinity";
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