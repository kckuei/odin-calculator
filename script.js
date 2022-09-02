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
let counter = 0;

// window.onclick = (e) => explode(e);
allClearBtn.onclick = () => clickedAllClear();
addBtn.onclick = () => setOperator(add);
divideBtn.onclick = () => setOperator(divide);
multiplyBtn.onclick = () => setOperator(multiply);
subtractBtn.onclick = () => setOperator(subtract);

plusMinusBtn.onclick = () => clickedPlusMinus();
percentBtn.onclick = () => clickedPercent();
equalBtn.onclick 

zeroBtn.onclick = (e) => updateDisplay(e,0);
oneBtn.onclick = (e) => updateDisplay(e,1);
twoBtn.onclick = (e) => updateDisplay(e,2);
threeBtn.onclick = (e) => updateDisplay(e,3);
fourBtn.onclick = (e) => updateDisplay(e,4);
fiveBtn.onclick = (e) => updateDisplay(e,5);
sixBtn.onclick = (e) => updateDisplay(e,6);
sevenBtn.onclick = (e) => updateDisplay(e,7);
eightBtn.onclick = (e) => updateDisplay(e,8);
nineBtn.onclick = (e) => updateDisplay(e,9);
decimalBtn.onclick = (e) => updateDisplay(e,'.');

const multiply = (num1, num2) => {return +num1 * +num2}
const divide = (num1, num2) => {return +num1 / +num2}
const add = (num1, num2) => {return +num1 + +num2}
const subtract = (num1, num2) => {return +num1 - +num2}

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

function updateDisplay(e, txt) {
    if (e.target.id === 'decimal' && decimalExists()) return;
    if (e.target.id >= 0 && isFirstEntry()) display.innerText = '';
    display.innerText += txt;
}

function stash() {
    lastNum = display.innerText
}

function setOperator(operator) {
    currentOperator = operator;
}

function decimalExists() {
    return (display.innerText.indexOf('.') > 0);
}

function isFirstEntry() {
    return (display.innerText === '0');
}











// function explode(e) {
//     // console.log(e.target)
//     // console.log(e.target.id)

//     let classes = Array.from(e.target.classList)

//     // placeholder for future exploding fun
//     if (e.target.id === '0') counter++;
//     if (counter > 5 ) {
//         zeroBtn.classList.add('button-explode')
//     }
// }






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

