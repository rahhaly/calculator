const operators = document.querySelectorAll('.opr:not([value="="])');
const clearBtn = document.querySelector('.clr')
const comma = document.querySelector('.comma')
const numbers = document.querySelectorAll('.num')
const screen = document.querySelector('.screen')
const equalsBtn = document.querySelector('.opr[value="="]');

let firstNum = 0;
let secondNum = 0;
let result = 0;
let currentOpr = '';
let firstReversed = false;

operators.forEach(opr => opr.addEventListener('click', ()=>{
    setOperator(opr.getAttribute('value'));
    firstReversed = true;
}));

function setOperator(newOpr){
    currentOpr = newOpr;
}

numbers.forEach(num => num.addEventListener('click', ()=>{
    inputNum(num.getAttribute('value'));
}))

function inputNum(newNum){
    if(!firstReversed)
        firstNum = parseFloat(newNum);
    else
        secondNum = parseFloat(newNum);
}
equalsBtn.addEventListener('click', ()=>{
    firstReversed = false;
    calcResult();
    console.log(result);
})
function calcResult(){
    switch(currentOpr){
        case '+': result = sum(firstNum, secondNum);
            break;
        case '-': result =  substract(firstNum, secondNum);
            break;
        case '*': result = muliply(firstNum, secondNum);
            break;
        case '/': result = divide(firstNum, secondNum);
            break;
    }
}

function sum(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}
function muliply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
