//Question: Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).
// 


/*

Hint: Don't forget to check for bad values like null/undefined


P: Are we going to have a false value
//  Do we have a null value?
what other data type could we have?

R: // 14
// 15
// 35 etc

E: [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

P: 

function countSheeps(arrayOfSheeps){
    // return the value 
    pass the argument
}

*/


function getThingsDone(getIt){
  return getIt.filter(Boolean).length;
}
console.log(getThingsDone([12, 32, "truefriend", "cookies", " ", "...", 344, 444, 454]))