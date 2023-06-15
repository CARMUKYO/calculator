let firstNumber;
let operator;
let secondNumber;

function add(firstNumber,secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber,secondNumber){
    return firstNumber - secondNumber;
}

function mutiply(firstNumber,secondNumber){
    return firstNumber * secondNumber
}

function divide(firstNumber,secondNumber){
    return firstNumber / secondNumber;
}

function operate(firstNumber,operator,secondNumber){
    if(operator === "+"){
        return add(firstNumber,secondNumber);
    }else if(operator === "-"){
        return subtract(firstNumber,secondNumber);
    }else if(operator === "x") {
        return mutiply(firstNumber, secondNumber);
    }else if(operator === "÷"){
        return divide(firstNumber, secondNumber);
    }
}
