// Simple multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// P: Will be working with a positive integer. Well you cant multipy a string. 

// R: ((number % 2 === 0) * 8)
//     ((number % 3 === 0) * 9)

// E: 50 * 8
//     49 * 9
//      57 * 9

// P: 
// Write a function, assign a parameter to the function.

function simpleMultiplication(number) {
    // your code........
    // conditional statement
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}
// print the result in the console.
console.log(simpleMultiplication(50))
