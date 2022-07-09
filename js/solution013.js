// Beginner - Lost Without a Map
//Given an array of integers, return a new array with each value doubled.

//For example:
// P: An array of integers. 
// Since we are returning a new array. Map would be the most suitable
// R: print the result to the console.

// E:


//[1, 2, 3] --> [2, 4, 6]

// P: Pseudocode
// write a function. Assign a parameter to the function. 
// return the new array with a map

function lostMap(a) {
    return a.map(x => x * 2)
  }
  console.log(lostMap([3, 5, 7, 9, 12,45, 90, 180]))
  