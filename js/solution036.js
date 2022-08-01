/*
Question: Basic mathematical operation

//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

//Examples(Operator, value1, value2) --> output
//('+', 4, 7) --> 11
//('-', 15, 18) --> -3
//('*', 5, 5) --> 25
//('/', 49, 7) --> 7

Well, I will be creating a function that will take three parameters. one of them will be either '+', '-', '*', '/'.

if this are not quoted it will throw an error. Are they considered as a string?

console.log(basicOp('+', 4, 5), 9)
console.log(basicOp('-', 14, 7), 7)

E: 
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

P: We can either use a normal function or an arrow function as shown below.
For either of the process we are using an eval()
Lets get this done!!!
*/

function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2)
}
console.log(basicOp("+", 30, 2))
  /*
An arrow function doing thesame thing just for reference.

basicOp = (operation, value1, value2) => eval(value1 + operation + value2)
console.log(basicOp('-', 50, 20))
*/