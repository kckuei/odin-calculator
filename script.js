const display = document.getElementById('display')
const acBallClearBtn = document.getElementById('ac')
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
let counter = 0;

window.onclick = (e) => updateDisplay(e);
acBallClearBtn.onclick = () => clickedAllClear();
addBtn.onclick = () => setOperator(add);
divideBtn.onclick = () => setOperator(divide);
multiplyBtn.onclick = () => setOperator(multiply);
subtractBtn.onclick = () => setOperator(subtract);

const multiply = (num1, num2) => {return +num1 * +num2}
const divide = (num1, num2) => {return +num1 / +num2}
const add = (num1, num2) => {return +num1 + +num2}
const subtract = (num1, num2) => {return +num1 - +num2}

function clickedAllClear () {
    lastNum = 0;
    display.innerText = lastNum;
    currentOperator = null;
}

function stash() {
    lastNum = display.innerText
}

function setOperator(operator) {
    currentOperator = operator;
}


function updateDisplay(e) {
    // console.log(e.target)
    // console.log(e.target.id)

    let classes = Array.from(e.target.classList)

    if (classes.indexOf('number') > 0 && e.target.id !== 'ac' && display.innerText === '0') display.innerText = '';
    if (e.target.id === '0') display.innerText += '0';
    if (e.target.id === '1') display.innerText += '1';
    if (e.target.id === '2') display.innerText += '2';
    if (e.target.id === '3') display.innerText += '3';
    if (e.target.id === '4') display.innerText += '4';
    if (e.target.id === '5') display.innerText += '5';
    if (e.target.id === '6') display.innerText += '6';
    if (e.target.id === '7') display.innerText += '7';
    if (e.target.id === '8') display.innerText += '8';
    if (e.target.id === '9') display.innerText += '9';
    if ((e.target.id === 'decimal') && (display.innerText.indexOf('.')<0)) {
        display.innerText += '.';
    }

    // placeholder for future exploding fun
    if (e.target.id === '0') counter++;
    if (counter > 5 ) {
        zeroBtn.classList.add('button-explode')
    }
}






// if (classes.indexOf('operator') > 0 && currentOperator !== null) {
//     // console.log(typeof +lastNum)
//     // console.log(typeof +display.innerText)
//     let num1 = +lastNum;
//     let num2 = +display.innerText;
//     display.innerText = currentOperator(num1, num2);

//     // currentOperator = currentOperato
//     lastNum = display.innerText;
// }

// // if operator
//     // update the stash
//     // saver the operator
//     // if have previous operator

// // if number
//     // update the display

