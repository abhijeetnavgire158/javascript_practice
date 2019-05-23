console.log(foo(5));
// var foo = function(i) {
//     return i;
// }


function foo(i) {
    return i;
}

let v1 = 10
console.log('Scope ::');
console.log(v1);

var f1 = function() {
    let v1 = 20;
    console.log(v1);
    {
        let v1 =30;
        console.log(v1);
    }
    console.log(v1);
}
f1();
console.log(v1);

console.log('factorial')
var factorial = function(fact) {
    result = (fact >= 1) ? fact * factorial(fact-1) : 1;
    return result;
    
}
console.log(factorial(5));

console.log("Check this object access of function invocation");
var value = 500;
var obj = {
    value: 0,
    increment: function() {
        that = this; 
        that.value++; 
        console.log("VALUE :: "+ that.value);  
         
        var innerFunction = function() {
            console.log("VALUE s:: "+ that.value);
        }

        innerFunction(); //Function invocation pattern
    }
}
obj.increment();


var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var sayHello = function(){
    console.log('Hello, ' + this.name);
};

var sayGoodbye = function(){
    console.log('Goodbye, ' + this.name);
};

sayHello();
sayGoodbye();

sayHello.call(person1);
sayGoodbye.call(person1);

sayHello.call(person2);
sayGoodbye.call(person2);

console.log('\n\nFunction Has parqameters')

var say = function(greeting) {
    console.log(`${greeting} ${this.name}`);
}

say.call(person1, 'Hello');
say.call(person1, 'goodby');

say.call(person2, 'Hello');
say.call(person2, 'goodbye');

say.apply(person1, ['Hello']);
say.apply(person1, ['goodbye']);


say.apply(person2, ['Hello']);
say.apply(person2, ['goodbye']);