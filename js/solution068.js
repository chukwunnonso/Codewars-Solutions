/*
You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character. If the word's length is even, 
return the middle 2 characters.


A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test
cases due to an error in the test cases). You do not need to test for this. This is only here to tell you
that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.




*/


function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1)
  }
  console.log(getMiddle('GodsLoveIssTheGreatest'))
  
  
  //p: we want to check if the length of the word is even or odd. If even, we return two letters 
  //if odd, we will return just one letters
  
  //R console.log(getMiddle('Thisisforourowngood'), o)
  //console.log(getMiddle('Youknowyouhavetolearntopracticee'), ol)
  
  // E:
  //Kata.getMiddle("test") should return "es"
  
  //Kata.getMiddle("testing") should return "t"
  
  //Kata.getMiddle("middle") should return "dd"
  
  ///Kata.getMiddle("A") should return "A"
  
  
  //P 
  
  //In order to solve this question. we need the substrinjs which receives one or two values. the first value
  //tells where to start counting in the string while the second number shows where the counting should end.
  
  //we will use a function that rounds up our values by dividing the length. Please endeavor to play with it and try
  //things out for yourself. 
  
  //Everything enclosed by the ceil method are the two values of the substr. it also doubles as the conditional for  the ternary.
  
  
  