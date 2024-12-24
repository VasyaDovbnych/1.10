'use strict'

const processArray = (array, callback) => {
    return callback(array);
};

const getSum = arr => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = arr => Math.min(...arr);
const getMax = arr => Math.max(...arr);

const numbers = [10, 20, 5, 15];
console.log(processArray(numbers, getSum)); 
console.log(processArray(numbers, getMin)); 
console.log(processArray(numbers, getMax)); 



const operate = (a, b, callback) => {
    return callback(a, b);
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(operate(10, 5, subtract)); 
console.log(operate(10, 5, add));      
console.log(operate(10, 5, multiply));
console.log(operate(10, 5, divide));

