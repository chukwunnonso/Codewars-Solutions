
//Exes and Ohs
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be
case insensitive. The string can contain any char.

Examples input/output:


*/

//P: Check if the number of 'Xs' and 'Os' in the string are thesame

// R: console.log(XO(xoxo), true)
   //console.log(XO(xoxxooo), false)

//E: 
//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

//P: 

// make an arrow function
const XO = str => {
    // converting the argument to be case insensitive.
      str = str.toLowerCase().split('');
    //  We filter through to check if the number 'x' and 'o'
    // are equal we return true if not false. But i chose to use ternary Headers. Lets go!
    // Mind you x => x is just a param
      return ((str.filter(x => x === 'x').length === str.filter(x => x === 'o').length) ? true : false);
    }
    // if you want, print the result to the console
    console.log(XO('we are XOxoxxx'))
    
    
    /*
    function XO(str) {
      let x = str.match(/x/gi);
      let o = str.match(/o/gi);
       return ((x && x.length) === (o && o.length) ? true : false);
    }
    console.log(XO('xoxxoxoxoxXOoo'))
    */