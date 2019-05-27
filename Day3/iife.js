//Function Expression 
var demo1 = function(message) {
    console.log('log message ' + message);
}
demo1('demo1 call');

//Immediately Invoking Function Expression Example 
var demo2 = function(message) {

    return 'log message ' + message;

}('demo2 call');

console.log(demo1); //Function
console.log(demo2); //return the string


//IIFE Example
let name = 'Mukesh';
(function(name) {
    console.log("Hello " + name);
}(name));

//IIFE Example
(function(name) {
    console.log("(Parameter Outside) Hello " + name);
})(name);

