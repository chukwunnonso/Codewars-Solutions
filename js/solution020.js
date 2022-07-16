// Returning strings

//DESCRIPTION:
//Make a function that will return a greeting statement that uses an input;
// your program should return, "Hello, <name> how are you doing today?".

//[Make sure you type the exact thing I wrote or the program may not execute properly]

// We are working with a string. It would be a multiword string. Return exactly what we asked to return.
// I missed a comma in the returned statement and it showed i failed the test.

// R: return `this is the string to return with ${name}`. Its called  template literals

// E: `Hello, ${name}` = Hello Jane if Jane was passed in as the name.
//Hello, ${name}` = Hello Sandra if Sandra was passed in as the name.

// P
// Write a function with a name parameter.
function greet(name) {
    //return your code here using template literals
    return `Hello, ${name} how are you doing today?`
}
// Pass in the argument and print result.
console.log(greet("Jessica"))

