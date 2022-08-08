/*
// Highest and Lowest
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.


    P: A string of numbers. We are tasked with getting the highestr and lowest value from the numbers.
    R: console.log(highAndLow("4 1 7"), "7 1")
    console.log(highAndLow("2 1 9 3"), "7 1")

E:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

P: a function with a single parameter. Assign a string 
we split the string and return with a spread operator

*/


function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }
console.log(highAndLow('7 5 9 2 6'))  
