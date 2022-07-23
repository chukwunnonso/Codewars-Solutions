// Grasshopper - Messi goals function

/*
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.
*/

// P: Given a function with three parameter. Assign integers to each parameter as arguments.
// R: console.log(goals(20, 20, 16), 56)
//    console.log(goals(20, 23, 14), 57)


// E: 5, 10, 2  -->  17
//    12, 45, 8 ----> 65

// Write a function with three parameters.
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    // return it here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
// call the function below and pass the required argument.
console.log(goals(23, 29, 19))