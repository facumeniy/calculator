/// SELECTORS ///
// Display
const bottomScreen = document.querySelector("#bottom-screen-display");
const topScreen = document.querySelector("#top-screen-display");
// Numbers
const allNums = document.querySelectorAll(".num");
const decimalBtn = document.querySelector("#dot");
// Operators
const allOps = document.querySelectorAll(".op");
const equalBtn = document.querySelector("#equal");

const clearBtn = document.querySelector("#clear");

/// GLOBAL VARIABLES ///
let operator = "";
let previousValue = "";
let currentValue = "";


/// FUNCTIONS ///
function add(a, b){
    return a + b;
};

function substract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(operator, a, b){
    return operator(a, b);
};

function handleOperator(op){
    topScreen.textContent = `${bottomScreen.textContent} ${op}`;
    previousValue = currentValue;
    currentValue = "";
    bottomScreen.textContent = 0;
    operator = op;
};

function handleNumber(num){
    if(currentValue.length <= 5){
        currentValue += num;
    }
};

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+"){
        currentValue = operate(add, previousValue, currentValue);
    }else if(operator === "-"){
        currentValue = operate(substract, previousValue, currentValue);
    }else if(operator === "x"){
        currentValue = operate(multiply, previousValue, currentValue);
    }else{
        currentValue = operate(divide, previousValue, currentValue);
    }
    currentValue = roundNumber(currentValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
};

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
};

function addDecimal(){
    if(!currentValue.includes(".")){
        bottomScreen.textContent = currentValue + ".";
        currentValue += ".";
    }
};


/// EVENT LISTENERS
allNums.forEach((number) => {
    number.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
        bottomScreen.textContent = currentValue;
    })
});

allOps.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    })
});

clearBtn.addEventListener('click', () => {
    operator = "";
    currentValue = "";
    previousValue = "";
    topScreen.textContent = ""
    bottomScreen.textContent = 0;
})

equalBtn.addEventListener('click', () => {
    if(currentValue != "" && previousValue !== ""){
        calculate();
        topScreen.textContent = "";
        if(currentValue.length <= 5){
            bottomScreen.textContent = currentValue;
        }else{
            bottomScreen.textContent = `${currentValue.slice(0,5)}...`;
        }
    }
});

decimalBtn.addEventListener('click', () => {
    addDecimal();
});