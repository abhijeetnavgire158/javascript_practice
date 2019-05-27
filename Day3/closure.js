function greeting (saySomeThing) {

    return function(name) {
        return saySomeThing + ' ' + name + '!';
    }
} 

var sayHi = greeting('Hi');
var sayHello = greeting('Hello');
var sayBye = greeting('Bye');

console.log(sayHi('Abhijeet'));
console.log(sayHello('Mukesh'));
console.log(sayBye('Abhijeet'));



function bindFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
    }
    
    return arr;
}

function newBindFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        let j =i;
        arr.push(function () {
            console.log(j);
        });
    }

    
    return arr;
}

var fs = bindFunctions();
var fs2 = newBindFunctions();

fs[0]();// o.p :3
fs[1]();// o.p :3
fs[2]();// o.p :3

fs2[0]();// o.p :3
fs2[1]();// o.p :4
fs2[2]();// o.p :5

