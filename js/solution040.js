/*
Count of positives/ sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

P: when we have a single array of both positive and negative numbers. We want to count the positive array elements and sum the negatives.

R: console.log(sumAndMultiply([3, 2, 1, -3, -2, -1]) [3, -6])

E:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

P: write a function with a single parameter that will receive an array. We will use filter to get total number 
of element above zero. We will then use our friendly reduce method to sum elements that are less than zero(the negative integers)
*/





countPositivesSumNegatives = (input) => (input && input.length) ? [input.filter(num => num > 0).length, input.filter(num => num < 0).reduce((acc, c) => acc + c, 0)] : []
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, -5, -10, -19, -65]))
