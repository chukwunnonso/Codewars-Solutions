// Question: Function 1 - hello world
// Description:
///Make a simple function called greet that returns the most-famous "hello world!".

//Style Points
//Sure, this is about as easy as it gets. But how clever can you be to create the most creative
// hello world you can think of? What is a "hello world" solution you would want to show your friends?

// P: we are working with the string. Arrow functions or regular functions is allowed.
// I dont know why i only passed the test when the string 'hello world' is maintained in lowercase.

// R: Call the function and log the result.

// E: 'hello world!' ----> hello world!

// P: 
/*
function thisIsTheGreeting() {
    return 'hello world!'
}
*/

// Regular function
/* 

function greet() {
    return 'hello to a new world'
}
console.log(greet())

*/



// Arrow function
const greet = () => 'hello world!'
console.log(greet())
// Remember to call your function properly as shown above.