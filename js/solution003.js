//Question: String repeat

//Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.


//P: Parameters
//We are given two parameters. One would take the value
// of the string as an argument. The other parameter takes a numerical value representing the number 
// of times we intend to repeat. 
// The number should be above zero and not a decimal

//  R: Result
// Return the string the number of times you have entered

//E: Examples
//6, "I"     -> "IIIIII"
//5, "Hello" -> "HelloHelloHelloHelloHello"

//P: Pseudocode
//function myRepeatedString(string, numberOfTimesToRepeat){
  // Enter a conditional statement for the numberOfTimesToRepeat
  // Enter what should be returned with the repeat method

//}

function repeatStringSixTimes(stringValue, numberOfTimes){
    if (numberOfTimes > 0){
      return stringValue.repeat(numberOfTimes)
    } else {
      return stringValue
    }
  }
  console.log(repeatStringSixTimes("majesty", 10))