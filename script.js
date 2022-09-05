const DEFAULT_DISPLAY_SIZE = '4rem';
const MAX_DISPLAY_DIGITS = 11;

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

let allButtons = [allClearBtn, plusMinusBtn, percentBtn, divideBtn, 
    multiplyBtn, subtractBtn, addBtn, decimalBtn, equalBtn, zeroBtn, 
    oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, 
    eightBtn, nineBtn]

let number1 = display.innerText;
let number2 = null;
let currentOperator = null;
let clearScreenOnNextNumberSelection = false;

let styleCount = 0;
let explodeCounter = 0;
let explodeOn = 10
let exploded = false;

window.addEventListener('keydown', clickedHotKey);
window.addEventListener('click', explodeCalculator);
window.addEventListener('click', incrementCounter)
window.onload = ()=> setTimeout(resetCounter, 2000);

addBtn.onclick = (e) => clickedOperator(e.target.id, add);
divideBtn.onclick = (e) => clickedOperator(e.target.id, divide);
multiplyBtn.onclick = (e) => clickedOperator(e.target.id, multiply);
subtractBtn.onclick = (e) => clickedOperator(e.target.id, subtract);
percentBtn.onclick = (e) => clickedOperator(e.target.id, percent);

allClearBtn.onclick = () => clickedAllClear();
plusMinusBtn.onclick = () => clickedPlusMinus();
equalBtn.onclick = () => clickedEqual();

zeroBtn.onclick = (e) => clickedNumber(e.target.id,0);
oneBtn.onclick = (e) => clickedNumber(e.target.id,1);
twoBtn.onclick = (e) => clickedNumber(e.target.id,2);
threeBtn.onclick = (e) => clickedNumber(e.target.id,3);
fourBtn.onclick = (e) => clickedNumber(e.target.id,4);
fiveBtn.onclick = (e) => clickedNumber(e.target.id,5);
sixBtn.onclick = (e) => clickedNumber(e.target.id,6);
sevenBtn.onclick = (e) => clickedNumber(e.target.id,7);
eightBtn.onclick = (e) => clickedNumber(e.target.id,8);
nineBtn.onclick = (e) => clickedNumber(e.target.id,9);
decimalBtn.onclick = (e) => clickedNumber(e.target.id,'.');

const multiply = (num1, num2) => {return num1 * num2}
const divide = (num1, num2) => {return num1 / num2}
const add = (num1, num2) => {return num1 + num2}
const subtract = (num1, num2) => {return num1 - num2}
const percent = (num) => {return num/100}

function clickedAllClear () {
    number1 = 0;
    number2 = null;
    currentOperator = null;
    render(number1);
}

function resizeDisplayDigits(val) {
    if (val.toString().length > MAX_DISPLAY_DIGITS) {
        display.style.fontSize = '2rem';
    } else {
        display.style.fontSize = DEFAULT_DISPLAY_SIZE;
    }
}

function render(val) {
    resizeDisplayDigits(val);
    display.innerText = val;
}

function clickedPlusMinus() {
    let current = display.innerText; 
    if (current.indexOf('-') < 0) render('-' + display.innerText);
    else render(current.slice(1));
}

function clickedNumber(id, txt) {
    if (clearScreenOnNextNumberSelection) {
        render('');
        clearScreenOnNextNumberSelection = false;
    }

    if (id === 'decimal' && decimalExists()) return;
    if (id >= 0 && isFirstEntry()) render('');

    if (numLoaded(number1) && currentOperator) {
        number2 = +(display.innerText + txt);
    }
    render(display.innerText + txt);
}

function clickedOperator(id, operator) {
    if (operator === currentOperator && !numLoaded(number2)) return

    if (numLoaded(number1) && currentOperator) {
        number2 = +display.innerText
        render(currentOperator(+number1, +number2));
    }

    currentOperator = operator;
    number1 = +display.innerText;
    clearScreenOnNextNumberSelection = true;

    if (id === 'percent') {
        render(currentOperator(+display.innerText));
    }
}

function clickedEqual() {
    if (numLoaded(number1) && currentOperator && numLoaded(number2)) {
        let result = currentOperator(number1, number2)
        number1 = result
        render(result)
    } else if (numLoaded(number1) && currentOperator) {
        let result = currentOperator(number1,number1)
        number2 = number1
        number1 = result
        render(result)
    }
}

function numLoaded(num) {
    if (num !== null && num.toString().length > 0) return true;
    return false;
}

function decimalExists() {
    return (display.innerText.indexOf('.') > 0);
}

function isFirstEntry() {
    return (display.innerText === '0');
}

function plusOrMinus() {
    return Math.random() < 0.5 ? -1 : 1;
}

function createExplodingStyle() {

    let x = plusOrMinus() * Math.random()*600;
    let y = plusOrMinus() * Math.random()*600;
    let rot = Math.random()*500;
    let rot_res = Math.random()*360;
    let duration = Math.random()*1.5;
    let animationName = `explode-${styleCount}`;
    let className = `explode-${styleCount}`;
    styleCount ++;

    let style = document.createElement('style');
    style.innerHTML = `.${className} {
        animation-duration: ${duration}s;
        animation-name: ${animationName};
        animation-iteration-count: 1;
        animation-direction: normal;
        transform: translate(${x}px, ${y}px) rotate(${rot_res}deg);
    }`;
    document.getElementsByTagName('head')[0].appendChild(style);
    
    let cssAnimation = document.createElement('style');
    let rules = document.createTextNode(`@-webkit-keyframes ${animationName} {
        0% { transform: translate(0px, 0px) rotate(0); }
        100% { transform: translate(${x}px, ${y}px) rotate(${rot + rot_res}deg); }
    }`);
    cssAnimation.appendChild(rules);
    document.getElementsByTagName("head")[0].appendChild(cssAnimation);

    return animationName;
}

function explodeCalculator(e) {
    if (explodeCounter === explodeOn && !exploded) {
        allButtons.forEach(button=>{
            let className = createExplodingStyle();
            button.classList.add(className);
        })
        exploded = true;
    }
}

function clickedOnBody(e) {
    for (x of e.path) {
        if (x.id === 'main') return true;
    }
    return false;
}

function incrementCounter(e) {
    if (clickedOnBody(e)) explodeCounter++;
}

function resetCounter() {
    // resets the explosion counter every 2 seconds
    explodeCounter = 0;
    setTimeout(resetCounter, 2000)
}

function clickedHotKey(e) {
    if (e.key === '0') clickedNumber('0', '0')
    if (e.key === '1') clickedNumber('1', '1')
    if (e.key === '2') clickedNumber('2', '2')
    if (e.key === '3') clickedNumber('3', '3')
    if (e.key === '4') clickedNumber('4', '4')
    if (e.key === '5') clickedNumber('5', '5')
    if (e.key === '6') clickedNumber('6', '6')
    if (e.key === '7') clickedNumber('7', '7')
    if (e.key === '8') clickedNumber('8', '8')
    if (e.key === '9') clickedNumber('9', '9')
    if (e.key === '.') clickedNumber('decimal', '.')
    if (e.key === '+') clickedOperator('add', add)
    if (e.key === '-') clickedOperator('subtract', subtract)
    if (e.key === '/') clickedOperator('divide', divide)
    if (e.key === '*') clickedOperator('multiply', multiply)
    if (e.key === '%') clickedOperator('percent', percent)
    if (e.key === '=') clickedEqual()
    if (e.key === 'c') clickedAllClear()
}