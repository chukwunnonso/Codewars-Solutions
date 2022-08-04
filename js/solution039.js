// century to year
/*
The first century spans from the year 1 up to and including the year 100, the second century - from the
year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

p:  given a year, we are to get the century from that year. Dividing our year with 100 will give us the century.
Is there a method we can use to obtain the numbers rounded upward?

R: console.log(century(2101), 22)
   console.log(century(2001), 21)

E:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

P: create a an arrow function that will take just one parameter(the year). Introduce the Math.ceil() method.
call the function and assign the argument. Lets get this done...
*/

century = year => Math.ceil(year / 100)
console.log(century(2301))


/*
const century = year => Math.ceil(year / 100)
console.log(century(2301))
*/


