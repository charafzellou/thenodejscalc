const calc = require('./calc');

console.clear();
console.log('We take numbers 12 and 3 as examples:');

var resultAdd = calc.add(12,3);
console.log('Add() result: ', resultAdd);

var resultSubstract = calc.substract(12,3);
console.log('Substract() result: ', resultSubstract);

var resultMultiply = calc.multiply(12,3);
console.log('Multiply() result: ', resultMultiply);

var resultDivide = calc.divide(12,3);
console.log('Divide() result: ', resultDivide);