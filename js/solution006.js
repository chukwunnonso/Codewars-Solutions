// Question: Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.


//P: Would it be possible to remove the spaces from Numbers? We will be given a string.
// There would be spaces between the strings
// R: Console.log(removeSpaceFromString(" This is the string"))
// E: "Find Me Here" = FindMeHere
//  "Practice Will Make You Better" = PracticeWillMakeYouBetter

// P: PseudoCode

// function letsRemoveSpacesFromTheString(x) {
  //return x.split(" ").join("")
//}
// we print the result to the console.


function removeSpaceFromString(str) {
  
    return str.split(" ").join("")
  }
  
  console.log(removeSpaceFromString("It Only Gets Better With Practice"))
  