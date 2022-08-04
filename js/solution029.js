// calculate Average

// Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

// well i tried this the first time and didnt get it right. After some days i revisited it and,
// boom, i figured it out.

//P: A simple function with an array. No long story 

// R console.log(average([1, 2, 3, 4, 5]), 5)
//   console.log(average([1, 2, 3, 4, 10]), 4)

// E: [1, 3, 3, 4, 5, 8] ---> 4
// [1, 3, 3, 4, 5, 8, 4] ---> 4

//P write a function that will take an array
function find_average(array) {
    // your code here
    //return the array parameter with a reduce method then divide with the length of the array
    return array.reduce((a, b) => a + b) / array.length
}
// print result however you want to...
console.log(find_average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
