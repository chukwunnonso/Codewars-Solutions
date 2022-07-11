// Beginner Series #1 School Paperwork

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// P: Two parameters one is the number of classmates. Th other is the number of pages. 
// Working with positve integers

//R: The result should be a multiplication of both n and m


//Example:
//n= 5, m=5: 25
//n=-5, m=5:  0
//Waiting for translations and Feedback! Thanks!



// P: write a function asssign parameter n and m to it
function paperDuty(n, m) {
    // write your conditional statement 
  if (m < 0 || n < 0) {
    return 0;
  } else{
    return m * n
  }
}
console.log(paperDuty(10, 25))