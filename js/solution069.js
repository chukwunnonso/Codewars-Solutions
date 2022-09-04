/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and
After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter.
When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, 
you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual
quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

E:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be

*/

//P: Having the ability to change the cases of your writing from small to large would be great. so we will be
//given strings that are small letters.

//R 
//console.log(upperCaaase('my name is favour'), 'My Name Is  Favour')
// console.log(upperCaaase('Would You Be Here Tomorrow'), 'Would You Be Here Tomorrow')

E:

//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be

String.prototype.toJadenCase = function () {
    //...
    return this.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};


// first thing we need to do is split the strings. We then map through the words and change each first letter (index 0) into
// uppercase. Then we concatenate this with the other alphabets (from index 1) which will be from the second letter.
//Then we return a new string with just spaces between the words.  
