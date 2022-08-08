/*
  Fake binary

Given a string of digits, you should replace any digit below 5 with '0' 
and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

P: Here we have a string of digits. Come up with one based on your discretion. We will check if it is higher than five or less than five.

R: console.log(fakebinary('3415'), 0001)
console.log(fakebinary('63915'), 10101)

E: '12' ----> 00
    92 ----> 10

P: our function should have one parameter. we will split the string of numbers using split. A friendly reminder, split works only on strings
 we run through the splitted array using map method with our ternary
*/


function fakeBinary(x) {
  return x.split('').map((y => y < 5 ? 0 : 1)).join('')
}
console.log(fakeBinary('1234694887995556'))
