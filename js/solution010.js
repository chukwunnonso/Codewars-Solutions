// Invert an array

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, 
//and the negatives become positives.

//You can assume that all values are integers. Do not mutate the input array/list.


// P: We were given a function. We will be working with an array of numbers.
// The array list shouldnt be mutated or changed.
//R: console.log(invert([1, 2, 3, 4, 5]))
//E: 
//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []


function invert(array) {
    return array.map(x => x * -1)
  }
  console.log(invert([1, -3, 4, 45, -65, 90]))
  
  