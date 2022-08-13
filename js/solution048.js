

/*

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:


P: we were given two parameter n and x. n will be the given number and x is the number of times.
Note we are working with positive integers that are greater than zero.

R console.log(countBy(2, 6), 2, 4, 6, 8, 10, 12)
console.log(countBy(4, 7), 4, 8, 12, 16, 20, 24, 28)


E

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

P: we write a function. Within the function, we assign a variable z to an empty array.
we also have another variable counter that shows the number we start counting from.

To loop through this, while loop will do the work for us. 
*/



function countBy(x, n) {
    let z = [];
    let initialCount = 1

    while (z.length < n) {
        z.push(x * initialCount);
        initialCount++;

        console.log(z.length);
    }
    return z;
}
console.log(countBy(2, 5))