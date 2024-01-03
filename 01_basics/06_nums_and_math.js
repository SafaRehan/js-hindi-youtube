const score = 400
//console.log(score);

const balance  = new Number(100)
// console.log(balance);
// console.log(balance. toString()); // convert into strings
// console.log(balance. toString().length); // returns length of converted string
// console.log(balance. toFixed(2)); // returns tw0 zeroes after the decimal

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(5));
// console.log(otherNumber.toPrecision(6));

//Number.MIN_VALUE (check it in console)
// access---- Number. (in console)

// ++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++

//console.log(Math)

// console.log(Math.abs(-4))  // convert negative num into postive num
// console.log(Math.round(4.6))   // round off the num
// console.log(Math.ceil(4.2))  // round off to the upper limits
// console.log(Math.floor(4.9))  // round off to the lower limits
// console.log(Math.min(1,3,4,7))  // returns the smallest value
// console.log(Math.max(1,3,4,7))   // returns the largest value

//console.log((Math.random() * 10) + 1)
//console.log(Math.floor((Math.random() * 10) + 1))  // returns value from 1 to 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
