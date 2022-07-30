// Question: Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

//if bmi <= 18.5 return "Underweight"

//if bmi <= 25.0 return "Normal"

//if bmi <= 30.0 return "Overweight"

//if bmi > 30 return "Obese"


//P: function that does mathematical conversion for us. We are working with two positive integers for both parameters

//R Console.log(BMI(100, 2), "normal")  Console.log(BMI(60, 2), "underweight")

//E 100, 2 = 25,  60, 2 = 12   

// P write a function assign two parameters, weight and height to it.



function bmi(weight, height) {
    // The variable that does the conversion for us. 
    var bmi = weight / Math.pow(height, 2)
    // for the above we are returning with a ternary operator.
    return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese"
}
// Print to the console with arguments
console.log(bmi(100, 2))


  // reference note
  // we used condition and if statement, condition and if statement, condition, if statement and else
