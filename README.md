# odin-calculator
Toy calculator

We'll rely on Javascripts automatic typecasting
"Your calculator should not evaluate more than a single pair of numbers at a time"
Trivial implmeentation


//psuedocode
// need to know
// 1. what the last number is (initialized to zero) 
// 2. whee we are operating versus providing an operand


// if we select a number (0 to 9 or decimal place) when no operator is specified, we overwrite/update the stashed number
// then if we select an operator, stash the current number, and save the current operator

// if we click another operator, 
// then we apply the last operator with the current number and the stashed number
// then we update the display
// then we stash the current number, and save the current operator

// in this way, this also works for repeatedly hitting the same operator key


// number (initialized) ... operator ... operator ... operator ...  operator ...
// number (initialized) ... number (new) ... operator ... operator ... operator ...
// number (initialized) ... operator ... number (new) ... operator ... number (new) ... 
// number (initialized) ... number (new) ... operator ... number (new) ... operator ...

// 1 + 1 - =  --> 0
// 1 + 1 + =  --> 2

/// make keys pop off if clicked fast enough



// if number clicked when there is a number in the stash and the operator is loaded
//    clear the screen if this is the first number entry after operator loading, and take the number
//    else take number entry as usual

// if equal is clicked (and there is a number in stash and operator is loaded)
//    apply the loaded operator on the stashed number and screen number
//    then update the display
//    clear the operator

// if operator +,-,/,* clicked (and there is a number in stash and operator is loaded)
//    apply the loaded operator on the stashed number and screen number
//    then update the display
//    update the operator function
//    set lastNum equal to current result 