//Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:



// P: We are given two words . We will abrreviate the words to their respective initials

// R: console.log(abbrevName(" My Name"))


// E:
//Sam Harris => S.H

//patrick feeney => P.F


// P: create a function assign a parameter to it

function abbrevName(name){
    // Return the parameter with split
    return name.split(' ').map(c => c[0].toUpperCase()).join('.')
    // code away
  
  }
  console.log(abbrevName("two names"))
  
  // When i submitted without the toUpperCase() method, i passed the test but it showed that i failed the attempt.