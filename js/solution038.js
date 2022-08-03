
/*
Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a
 function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/





function countSheeps(arr) {
    let numberOfSheeps = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) numberOfSheeps += 1
    }
    return numberOfSheeps
}
console.log(countSheeps(['sheep', 'sheep', 'sheep', 'sheeep', '', 'shrek']))


/*
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
}
console.log(countSheeps(['sheep', 'sheep', 'sheep', 'sheeep', '', 'shrek', 'micah']))
*/