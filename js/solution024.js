// Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

//

// P: Given an array of integers. We are to multiply all the array elements together. This is not an array of strings.
// R: console.log(arrayToMultiply([1, 2, 3], 6))
// console.log(arrayToMultiply([1, 5, 4], 20)) 

// E: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//    [2, 6, 8] => 2 * 6 * 8 = 96

// P: write a function with a single parameter
function arrayToMultiply(pet) {
    // use reduce array methods, but with a multiplication
    return pet.reduce((a, b) => a * b)
}
// Print the result in the console.
console.log(arrayToMultiply([1, 2, 3, 33, 55]))


function grow(x) {
    return x.reduce((a, b) => a * b)
}
console.log(grow([1, 2, 3, 33, 55]))