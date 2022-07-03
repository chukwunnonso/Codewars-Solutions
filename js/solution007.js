//Convert number to reversed array of digits
//Given a random non-negative number, 
//you have to return the digits of this number within an array in reverse order.


//P: Given a number. The number shouldnt be negative.
// R: Result console.log(digitize(39387493749))
// E: Example 3456789 - [9. 8, 7, 6, 5, 4, 3]
// P: Pseudocode 

function digitize(n){
    // return an array of the number in the reversed form. 
}
// call the function




function digitize(n) {
    //code here
    return Array.from(String(n), Number).reverse();
  }
  console.log(digitize(325646789469))

