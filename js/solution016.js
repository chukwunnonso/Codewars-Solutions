//Opposites Attract

// Timmy & Sarah think they are in love, 
//but around where they live, they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other has an odd number of
// petals it means they are in love.

//Write a function that will take the number of petals of each flower and return true if they
// are in love and false if they aren't.

// It need two numbers. This should be positive integers. if One of the integer is even while the other is odd it implies that they are in love. if they are thesame, say even and even or odd and odd they are not in love. Wow

// console.log((4, 13), "They are in love")
//console.log((5, 17), "They are not in love")
//console.log((4, 12), "They are not in love")

//E: 2, 6 same type (even numbers) of petals - false
// 3, 8  one is odd and the other is even - true.



// p: 

function lovefunc(flower1, flower2) {
    // moment of truth
    return flower1 % 2 !== flower2 % 2
}
console.log(lovefunc(8, 15))