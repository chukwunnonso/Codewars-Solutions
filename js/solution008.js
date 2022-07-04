/*console.log("we made it")


function returnSmallestInteger(smallestVal) {
    return Math.min.apply(null, smallestVal)
  }
  console.log(returnSmallestInteger([2, 4, 40, 76, 88, 98, 1, -1]))
  */

  // Keep Hydrated!
  // Nathan loves cycling.

//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

//You get given the time in hours and you need to return the number of litres
// Nathan will drink, rounded to the smallest value.

 
// P: for every one hours he consumedd 0..5 litres of water
// we are working with a whole number.

// R: return the result 

//E: 6hours ---> 3litres of water
  //5hours ----> 2litres of water

/* P: 
function numbersOfLitres(timeCycled) {
    return Math.floor()
}
numbersOfLitres();
*/

function numbersOfLitres(timeCycled) {
    return Math.floor(timeCycled * 0.5);
}
console.log(numbersOfLitres(6))