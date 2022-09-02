const input = document.getElementById('input-text');
const superBtn = document.getElementById('super-mode');
const test = document.getElementById('test');

let superMode = false;

const stdToSuperDict= {'0':'⁰', '1':'¹', '2':'²', '3':'³', '4':'⁴', '5':'⁵', '6':'⁶', '7':'⁷', '8':'⁸', '9':'⁹' }
const superToStdDict = swap(stdToSuperDict);

superBtn.onclick = () => clickSuper();
input.oninput = (e) => formatText(e);


function swap(obj) {
    output = {}        
    for (key in obj) {
        output[obj[key]] = key
    }
    return output;
}

function clickSuper() {
    superMode? superMode = false: superMode = true;
    makeInputActive();
}

function makeInputActive() {
    input.focus();
}

function deactivateSuperModeIfInvalidInput(e) {
    if (superMode && !stdToSuperDict.hasOwnProperty(e.data)) {
        superMode = false;
    }
}

function formatText(e) {
    deactivateSuperModeIfInvalidInput(e);
    if (e.inputType === 'insertText') formatInsertText(e);
    if (e.inputType === 'deleteContentBackward') formatDeleteText(e);
}

function formatInsertText(e) {
    // replaces 
    let index = input.selectionStart;
    let left = input.value.slice(0,index-1);
    let right = input.value.slice(index);

    if (e.data==='*') input.value = left + '×' + right;
    if (e.data==='/') input.value = left + '÷' + right;

    if (superMode && stdToSuperDict[e.data]) {
        input.value = left + stdToSuperDict[e.data] + right;
    }
    
    input.setSelectionRange(index,index);
}

function formatDeleteText(e) {
}

function isSuper(char) {
    return superToStdDict.hasOwnProperty(char)
}

function hasOnlyDigits(str) {
    return /^-?\d+$/.test(str);
}

function removeSpaces(str) {
    return str.replace(/\s+/g,'');
}

function removeCommas(str) {
    return str.replace(/,+/g,'');
}

function insertSuperOperator(str) {
    // Insert super operator where needed
    let array = Array.from(str)
    let i = 0;
    while (i < array.length) {
        if (isSuper(array[i]) && (!isSuper(array[i-1])) && (hasOnlyDigits(array[i-1]))) {
            array.splice(i, 0, '^');
        }
        i++;
    }
    return removeCommas(array.toString());
}

function superToStandard(str) {
    // All super characters to standard form
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (isSuper(c)) newStr += superToStdDict[c];
        else newStr += c;
    }
    return newStr;
}

function parseInput() {
    // Get the input ready for calculation FPEDMAS
    let newStr = input.value;
    newStr = removeSpaces(newStr);
    newStr = insertSuperOperator(newStr)
    newStr = superToStandard(newStr);
    return newStr
}

function containsUnbalancedBrackets(str) {
    counts = Array.from(str).reduce((last, next)=>{
        if (last[next] === undefined) last[next] = 1
        else last[next] +=1
        return last;
    }, {})
    return (counts[')'] !== counts['(']) 
}

function containsSpecialCharacters(str){
    // var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    var regex = /[ @#$&*_\=\[\]{};':"\\,<>?]/g;
    return regex.test(str);
}

function containsInvalidDot(){

}

function containsInvalidPerc(){

}

function containsInvalidFactorial(){

}

function containsInvalidSign(){

}

function containsAmbiguousBrackets() {
    // e.g. 1232(3)2,  1232(2+2)+2
    // must be explicit, or we should automatically cast it if there is no other operators to left or right
}

function validUnary(){

}

function validTernary(){

}


function isValid(str) {
    // Check for malformed expression

    if (containsUnbalancedBrackets(str)) return false;
    if (containsSpecialCharacters(str)) return false;

    return true;
}



function isOperator(str) {
    var regex = /[ !^*()+\-=\\|\/×÷]/g;
    return regex.test(str);
}

function findOperators(str) {
    let indices = [];
    for (let i = 0; i < str.length; i++) {
        if (isOperator(str[i])) indices.push(i);
    }
    return indices;
}

// something to find all the operators and parenthesis
// something to find matching parenthesis
// something to iterate through nested calculations

// find each exponent location
// evaluate, and substitute

let str = '1^3×2^12232(3)232^0123456789-3×2÷4';
let operatorIndices = findOperators(str);

let index =  str.indexOf('^');
let count = 0;
while(index) {
    index =  str.indexOf('^');
    

    

    count ++;
    if (count > 20) break;
}

let pos = operatorIndices.findIndex((num) => {
    return num > index;
});
rightIndex = operatorIndices[pos] || str.length-1 

pos = operatorIndices.findIndex((num) => {
    return num < index;
});
leftIndex = operatorIndices[pos] || 0


left = str.slice(leftIndex,index)
right = str.slice(index+1, rightIndex)


window.onload = () => {
    test.innerText = parseInput();
    console.log(findOperators(parseInput()))
    console.log(isValid(parseInput()));
}