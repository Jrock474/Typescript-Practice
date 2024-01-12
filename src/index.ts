// Typescript allows us to expicitly set the data type of a variable.
// Whenever you change a variable it MUST match the data type when it is first declared 
// This helps down the line by preventing future errors we may face if we were to do this

// If we were to reassign the variable on line 10 to a string it would throw an error
// saying that it must be a number as it's initialized on line 9
let number1: number = 1;
number1 = 3

let string1: string = "test"
console.log(string1)