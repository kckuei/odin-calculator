const screen = document.getElementById('screen')
const ac = document.getElementById('ac')
const plusMinus = document.getElementById('plusminus')
const percent = document.getElementById('percent')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const subtract = document.getElementById('subtract')
const decimal = document.getElementById('decimal')
const equal = document.getElementById('equal')

const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')


window.onclick = (e) => {
    console.log(e.target.id);

    
    if (e.target.id === 'ac') screen.innerText = '';


    if (e.target.id === '1') screen.innerText += '1';
    if (e.target.id === '2') screen.innerText += '2';
    if (e.target.id === '3') screen.innerText += '3';
    if (e.target.id === '4') screen.innerText += '4';
    if (e.target.id === '5') screen.innerText += '5';
    if (e.target.id === '6') screen.innerText += '6';
    if (e.target.id === '7') screen.innerText += '7';
    if (e.target.id === '8') screen.innerText += '8';
    if (e.target.id === '9') screen.innerText += '9';

}
