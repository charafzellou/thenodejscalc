const calc = require('./calc');

console.log('We take numbers 12 and 3 as examples:');

var resultAdd = calc.add(12,3);
console.log('Add() result: ', resultAdd);

var resultSubtract = calc.subtract(12,3);
console.log('Subtract() result: ', resultSubtract);

var resultMultiply = calc.multiply(12,3);
console.log('Multiply() result: ', resultMultiply);

var resultDivide = calc.divide(12,3);
console.log('Divide() result: ', resultDivide);