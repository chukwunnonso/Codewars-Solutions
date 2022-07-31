// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:

//name + " plays banjo" 
//name + " does not play banjo"
//Names given are always valid strings.

// P: the function argument should be a single stringed name. it hass to be valid. What then happens if its not valid?

//R: console.log(check('rita'), plays banjo)
//  console.log(check('Tita'), does not play banjo)

//E: rita ----> plays banjo
//    james ----> Does not play banjo

// P write a function cand assign parameter to it.


function areYouPlayingBanjo(name) {
    // conditional statement here. A ternary will also do.
    if (name[0].toLowerCase() == "r") {
        return name + " plays banjo";
    } else {
        return name + " does not play Banjo";
    }
}
//print result to the console
console.log(areYouPlayingBanjo("Rita"))
