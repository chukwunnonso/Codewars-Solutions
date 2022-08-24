/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

/*
P: We will be given numbers inform of strings. Our task is to get to split the 
string of numbers, square each one and concatenate it again.

R: console.log(squaredDigits('234'), 4916)
console.log(squaredDigits('157'), 12549)

E: '34' ---> 916
    '46' ---> 1636

 //P: write a function. while returning, split the string and map through each value.
 //and join back our value.
 
 */

function squareDigits(num){
    return Number(('' + num).split('').map((val) => Math.pow(val, 2)).join(''))
  }
  console.log(squareDigits('9237645'))