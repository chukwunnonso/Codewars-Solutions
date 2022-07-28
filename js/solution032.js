// Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.


// P: Our task is to change time given in hours, minutes and seconds into milliseconds. Its 
// just a simple conversion. Hour to seconds = h * 3600. Minute to seconds = m *60.
// This question reminds me of the basic physics i did in high school. Lets go!!!

// R console.log(timeInMilliseconds(3, 5, 8), 11108000ms)

// E   h = 0
// m = 1
// s = 1

//result = 61000

//P write a simple function assign three parameters which represents hour, mins and seconds
function timeAfterMidnight(h, m, s) {
    // return the function with the conversion values
    // h * 60 *60, min *60 + s * 1000(seconds to milliseconds = * 1000)
    return ((h * 3600) + (m * 60) + s) * 1000;
}
console.log(timeAfterMidnight(2, 4, 6))