// Calculate average

// DESCRIPTION:
//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.



const findAverage = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue) / arr.length
console.log(findAverage([23, 16, 77, 90, 100, 56, 54]))

