//import {square, sqrt} from './libs.js';
//import * as lib from './libs.js';
import logMessage from './single-function.js';
import {square, mapEachArray as mapArr, Sqrt} from './libs.js';


console.log('Main JS Load');
console.log(square(11));
console.log(Sqrt);

var listNumbers = [1, 2, 3, 4, 5, 6];
var multiplyListNumber = mapArr(listNumbers, function(value) {
    return value * 2;
});

console.log(listNumbers);
console.log(multiplyListNumber);

console.log(logMessage("welcome to JS!"));


var pi = require('./common.js').PI;
var factorial = require('./common.js').factorial;

console.log(PI);
console.log(factorial);