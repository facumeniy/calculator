// Display
const bottomScreen = document.querySelector("#bottom-screen-display");
const topScreen = document.querySelector("#top-screen-display");
// Numbers
const btn9 = document.querySelector("#nine");
const btn8 = document.querySelector("#eight");
const btn7 = document.querySelector("#seven");
const btn6 = document.querySelector("#six");
const btn5 = document.querySelector("#five");
const btn4 = document.querySelector("#four");
const btn3 = document.querySelector("#three");
const btn2 = document.querySelector("#two");
const btn1 = document.querySelector("#one");
const btn0 = document.querySelector("#zero");
const dotBtn = document.querySelector("#dot");
// Operators
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equal");

let operation = 0;
let arr = [0];
let string = "";
let action = "";
let displayValue = 0;

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

function btnAction(btn){
    btn.addEventListener('click', () => {
        bottomScreen.textContent = string + btn.textContent;
        string = bottomScreen.textContent;
        displayValue = parseInt(string);
    });
};
//
///
////
btnAction(dotBtn);
btnAction(btn0);
btnAction(btn1);
btnAction(btn2);
btnAction(btn3);
btnAction(btn4);
btnAction(btn5);
btnAction(btn6);
btnAction(btn7);
btnAction(btn8);
btnAction(btn9);

addBtn.addEventListener('click', () => {
    arr.push(displayValue);
    operation = operate(add, arr[0], arr[1]);
    topScreen.textContent = `${operation} +`;
    bottomScreen.textContent = operation;
    for (let num of arr){
        arr.pop();
    };
    string = "";
    action = "add";
});

