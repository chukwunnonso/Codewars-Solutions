// Is he going to survive?

// DESCRIPTION:
//A hero is on his way to the castle to complete his mission.However,
// he's been told that the castle is surrounded with a couple of powerful dragons!
// each dragon takes 2 bullets to be defeated, our hero has no idea
// how many bullets he should carry.. Assuming he's gonna grab a specific given number of
// bullets and move forward to fight another specific given number of dragons, will he survive ?

//  Return True if yes, False otherwise:)

//P: we have two parameters both with positive integers. Would it be possible to
//work with negative integers? or strings?

//R: console.log(funcName(22,11), true)
// console.log(funcName(22,15), false)
// console.log(funcName(52,20), true)

// E: 24, 6 ---> true
// E: 33, 20 ---> false


// Write a function and assign two parameters to it.
function hero(bullets, dragons) {
    //Get Coding!
    //return the number of bullets divided by the number of dragons
    return bullets / dragons >= 2
}
// Print the result in the console
console.log(hero(120, 80))