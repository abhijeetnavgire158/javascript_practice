let person = {
    firstName: "Abhi",
    lastName: "navgire",
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

let logname = function(para1, para2) {
    console.log("Fullname : " + this.getFullName());
    console.log("Parameters :" + para1 + ' '+ para2);
}

logname.call(person, 'P1', 'P2');
logname.apply(person, ['P1', 'P2']);
logname.bind(person); //bind copy the function with predefined parameters

let newlogname = logname.bind(person,'P1')
newlogname('P2');

function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
var multiplyByThree = multiply.bind(this, 3)

console.log(multiplyByTwo(3));
console.log(multiplyByThree(4));

