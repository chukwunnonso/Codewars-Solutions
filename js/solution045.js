/*
How good are you really?
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point
you may add your point to the given array!

P: An ambitous student wants to know if he is better than the average student in his class. Well dont be too
ambitous. we will give two sets of array values the two parameters. the should all be positive values because test score cant be negative.

R: console.log(betterThanAverage([20, 30, 10], [12, 6, 4]))

P: Write a function that with two prameters. Apply a reduce method to the first parameter. 
then arrays.length to the second parameter. 

Remember a ternary will be used for the conditional. 
*/




function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    // if i place the return ternary before the variable i will get
    // "cannot access result before initialization at betterThanAverage"

    const studentAverageScore = classPoints.reduce((acc, c) => acc + c, 0) / yourPoints.length
    return studentAverageScore > yourPoints ? false : true
}
console.log(betterThanAverage([45, 60, 55, 70, 90, 59], [70, 80, 90]))
