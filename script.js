const display = document.getElementById('display')
const allClearBtn = document.getElementById('ac')
const plusMinusBtn = document.getElementById('plusminus')
const percentBtn = document.getElementById('percent')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')
const subtractBtn = document.getElementById('subtract')
const addBtn = document.getElementById('add')
const decimalBtn = document.getElementById('decimal')
const equalBtn = document.getElementById('equal')

const zeroBtn = document.getElementById('0')
const oneBtn = document.getElementById('1')
const twoBtn = document.getElementById('2')
const threeBtn = document.getElementById('3')
const fourBtn = document.getElementById('4')
const fiveBtn = document.getElementById('5')
const sixBtn = document.getElementById('6')
const sevenBtn = document.getElementById('7')
const eightBtn = document.getElementById('8')
const nineBtn = document.getElementById('9')

let lastNum = display.innerText;
let currentOperator = null;
let clearScreenOnNextNumberSelection = false;

window.onclick = (e) => explode(e);
addBtn.onclick = (e) => clickedOperator(e, add);
divideBtn.onclick = (e) => clickedOperator(e, divide);
multiplyBtn.onclick = (e) => clickedOperator(e, multiply);
subtractBtn.onclick = (e) => clickedOperator(e, subtract);
percentBtn.onclick = (e) => clickedOperator(e, percent);

allClearBtn.onclick = () => clickedAllClear();
plusMinusBtn.onclick = () => clickedPlusMinus();
equalBtn.onclick = () => clickedEqual();

zeroBtn.onclick = (e) => clickedNumber(e,0);
oneBtn.onclick = (e) => clickedNumber(e,1);
twoBtn.onclick = (e) => clickedNumber(e,2);
threeBtn.onclick = (e) => clickedNumber(e,3);
fourBtn.onclick = (e) => clickedNumber(e,4);
fiveBtn.onclick = (e) => clickedNumber(e,5);
sixBtn.onclick = (e) => clickedNumber(e,6);
sevenBtn.onclick = (e) => clickedNumber(e,7);
eightBtn.onclick = (e) => clickedNumber(e,8);
nineBtn.onclick = (e) => clickedNumber(e,9);
decimalBtn.onclick = (e) => clickedNumber(e,'.');

const multiply = (num1, num2) => {return +num1 * +num2}
const divide = (num1, num2) => {return +num1 / +num2}
const add = (num1, num2) => {return +num1 + +num2}
const subtract = (num1, num2) => {return +num1 - +num2}
const percent = (num) => {return +num/100}

function clickedAllClear () {
    lastNum = 0;
    display.innerText = lastNum;
    currentOperator = null;
}

function clickedPlusMinus() {
    let current = display.innerText; 
    if (current.indexOf('-') < 0) display.innerText = '-' + display.innerText;
    else display.innerText = current.slice(1);
}

function clickedPercent() {
}

function clickedNumber(e, txt) {
    if (clearScreenOnNextNumberSelection) {
        display.innerText = '';
        clearScreenOnNextNumberSelection = false;
    }

    if (e.target.id === 'decimal' && decimalExists()) return;
    if (e.target.id >= 0 && isFirstEntry()) display.innerText = '';
    display.innerText += txt;
}

function clickedOperator(e, operator) {
    if (lastNum && currentOperator) {
        let num1 = +lastNum;
        let num2 = +display.innerText;
        display.innerText = currentOperator(num1, num2);
    }
    currentOperator = operator;
    lastNum = +display.innerText;
    clearScreenOnNextNumberSelection = true;

    if (e.target.id === 'percent') {
        display.innerText = currentOperator(+display.innerText);
    }
}

function clickedEqual() {
    if (lastNum) {
        let num1 = +lastNum;
        let num2 = +display.innerText;
        display.innerText = currentOperator(num1, num2);
        lastNum = null;
    }
}

function decimalExists() {
    return (display.innerText.indexOf('.') > 0);
}

function isFirstEntry() {
    return (display.innerText === '0');
}

let explodeCounter = 0;
function explode(e) {
    let classes = Array.from(e.target.classList)

    // placeholder for future exploding fun
    if (e.target.id === '0') explodeCounter++;
    if (explodeCounter > 5 ) {
        zeroBtn.classList.add('button-explode')
    }
}