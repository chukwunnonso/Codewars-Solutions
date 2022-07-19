// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


// P: This time around it is a boolean. Get an argument that will give a true or false answer.

//R console.log(funcName(3 < 5), true ---> 'yes)
//console.log(funcName(3 < 1), false ---> No)

// E: true = yes
// false = no

// Write a function with a parameter. 
function boolToWord(bool) {
    // Tie our ternary operator to a variable named result
    const result = bool === true ? "Yes" : "No"
    // Return result
    return result
}
// Call the function.
console.log(boolToWord(4 > 9))
