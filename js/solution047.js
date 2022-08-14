
/*
Transportation on vaccation


After a hard quarter in the office you decide to get some rest on a vacation. So you will book a 
flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the 
car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your
total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

P: Discount rate that varies. Depending on the number of days the car was rented. The higher the 
number of days, the higher the discount. We have 3 or more days and 7 or more days. Note daily rate for
rent is $40

R: console.log(rentalCarCost(7), -50)
console.log(rentalCarCost(3), -20)

E: 8 days ---> $50 discount
    3 days --->$20 discount
    4days ---> $20 discount


P: We write a function. Return 40 * the number of days.  
Conditional statement, what to return if true, conditional, else if, then else
*/





function rentalCarCost(d) {
    return 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0)
}
console.log(rentalCarCost(7))