/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres
 Nathan will drink, rounded to the smallest value.

For example:


P: A positive number is what we used. There are methoda we can use to round the value to the smallest.

R: console.log(litres(4.2 * 0.5), 2)
console.log(litres(5.7 * 0.5), 2)

E:  time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

P: write a simple function with litres as the declaration.
return the function with a simple math.floor method.This wuld give us the smallest value.
print the result.
Note: in place of the math.floor(). We can use the double tilde(~~) 
*/


function litres(time) {
    return Math.floor(time * 0.5)
}
console.log(litres(4.2))