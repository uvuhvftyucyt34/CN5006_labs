// app.js or index.js
const prompt = require('prompt-sync')(); // This line is essential
console.log("starting");

// program that performs addition, subtraction, multiplication and division on two numbers
// input from the user
const number = parseInt(prompt("Enter a number: "));
const number2 = parseInt(prompt("Enter another number: "));

// add numbers together
const addSum = number + number2;
console.log(number + " + " + number2 + " = " + addSum);

// subtract a number from another
const minusSum = number - number2;
console.log(number + " - " + number2 + " = " + minusSum);

// multiply numbers together
const multiply = number - number2;
console.log(number + " X " + number2 + " = " + multiply);

// divide a number by another
const divide = number / number2;
console.log(number + " / " + number2 + " = " + divide);