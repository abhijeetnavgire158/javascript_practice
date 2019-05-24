'use strict';

console.log(hoist); // Output: ReferenceError: hoist is not defined
hoist = 'Hoisted'; 


function functionHoistStrict() {

    console.log('function hoist :' + message);
    var message='function';
}
functionHoistStrict();