// Sentence Smash

/*
  
Write a function that takes an array of words and smashes them together into a sentence and returns
 the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces
  between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!



//P This is an array of strings. Lets smash them into a sentence. 

//R console.log(smashArray(['find', 'me']), find me)

E: 
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

P 
write a function with one parameter. 
Return the parameter with a .join method
print the result in the console with argument passed in as an array. lets Goooooo!!!
*/


function smashArrayOfStrings(arr) {
  return arr.join(" ")
}
console.log(smashArrayOfStrings(['we', 'are', 'making', 'progress', 'lets', 'go']))