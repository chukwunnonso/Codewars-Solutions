/* Descending Order

Your task is to make a function that can take any non-negative integer as an
argument and return it with its digits in descending order. Essentially, rearrange
 the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

//p: We are working with non-negative integers. Our goal is to arrange them in descending order.

//R: console.log(descendingOrder(123), 321)
//console.log(descendingOrder(739), 973)

E:
//Input: 42145 Output: 54421

//Input: 145263 Output: 654321

//Input: 123456789 Output: 987654321

//P
//return the function. The argument should be random numbers.
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}
console.log(descendingOrder(3453957303577784))
