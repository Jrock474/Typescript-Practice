// Variables 

// Typescript allows us to expicitly set the data type of a variable.
// Whenever you change a variable it MUST match the data type when it is first declared 
// This helps down the line by preventing future errors we may face if we were to do this

// If we were to reassign the variable on line 10 to a string it would throw an error
// saying that it must be a number as it's initialized on line 9
let number1: number = 1;
number1 = 3;

let string1: string = "test";

// In Typescript you don't have to annotate your variable like in the previous 2 examples
// This would also work as the variable that's initialiazed is a string and will be infered
let string2 = "test";
string2 = "world";

// If you don't use an annotation OR an initialization for a variable it will be set to any
// This defeats the purpose of Typescript as one of its benifits is datatype protections
let anyVariable; 
anyVariable = "a string";
anyVariable = 4;


// Arrays

let numbers : number[] = [1, 2, 3];
let numbers2 = [1, 2, 3];

let strings : string[] = ["hello", "world"]

// If you initialize a variable as an empty array without an annotation, it will be assigned as any
let anyArray = []

/* One of the beutiful things about typescript is the autocode using dot notation in 
anonymous functions. For example, in regular JS you' wouldn't be able to
autocode dot notation for parameters. However, in Typescript it's possible as tested
on line 42*/
let numbers3 :number[] = []
numbers3.forEach(n => n.toFixed)





