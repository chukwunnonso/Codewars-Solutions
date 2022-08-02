// Create a function that checks if a number n is divisible by two numbers x AND y.
// All inputs are positive, non-zero digits.


//P: Three parameters that are positive integers. We will check if the second and third parameter can divide the first without any remainder.

//R: console.log(isDivisible(12, 4, 3), true)
//   console.log(isDivisible(20, 7, 5), false)

//E:
//1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
//2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
//3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
//4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

//P write a function(this could be either normal or arrow function. Do what you like folk). 
//Use a modulus to check if its divisible. 
//A ternaary will determine what to return

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0 ? true : false
}
console.log(isDivisible(20, 2, 5))

/*
isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false
console.log(isDivisible(100, 14, 10))
*/