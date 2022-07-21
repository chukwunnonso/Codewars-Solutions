// convert array to a string

// Array plus array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
// I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.

// P: There will be two arrays containing integers. our aim is to have all the array elements summed together. 

//R: console.log(funcName([23, 16, 44, 38, 99], [9, 7, 6, 55]))
// console.log(funcName([23, 16, 44, 22, 99], [97, 70, 61, 32]))

// E:  [3, 2, 1], [6, 7, 8] ---> 27
//   [2, 5, 8], [20, 20, 29]---> 84

//P write a function with two parameters.

function arrayPlusArray(arr1, arr2) {
    // return the result. We are using array reduce method
    return arr1.reduce((acc, curr) => acc + curr) + arr2.reduce((acc, curr) => acc + curr); //something went wrong
}
//print the result to the console.
console.log(arrayPlusArray([2, 3, 6, 7, 90], [34, 16, 43, 22, 50]))