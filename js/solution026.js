// 
// Convert a string to an array

// Write a function to split a string and convert it into an array of words.

//Examples (Input ==> Output):
//"Robin Singh" ==> ["Robin", "Singh"]

//"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//P: we are to manipulate a string of words  into arrays of words. I dont think that there is a limit to the string length. Lets Goooo!

// R console.log(stringArr(["I am your friend"]), [I, am, your, friend])
//console.log(stringArr(["I am your anchor"]), [I, am, your, anchor])

// E: "come lets have dinner" ---> [come,lets, have, dinner]

// P: write a function
function stringToArray(string) {

    // code code code
    // attach your parameter to the array split method
    return string.split(' ')
}
// print the result in the console. Dont forget to add argument and call the function
console.log(stringToArray("I love arrays they are my favorite"))