/*
Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

const roots = numbers.map((num) => Math.sqrt(num));
*/


/*
P: Strings of words. It should be a sentence comprising of various words. We want to see the word with the shortest alphabets

R: console.log(findShortest('i am no longer your friend'), 1)
     //console.log(findShortest('no room  for negotiating'), 2)

 E: 'carry me' ---> 2
    //   'I will' ---> 1

 After writing our arrow function, we introduce Math.min because we are trying to count the letters
 that we have to ensure we get the shortest word from the sentence. We use a spread operator which allows our array
 to be expanded. we then map through it and get the length of each word.
 */

const findShortest = x =>
    Math.min(...x.split(' ').map(w => w.length))
console.log(findShortest('Greatness lies on the inside'))


/*
    
const findShortest = s => 
Math.min.apply(null, s.split(' ').map(element => element.length))
*/

