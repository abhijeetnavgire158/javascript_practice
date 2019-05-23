var a = 4;
a +=20;
console.log(a);

b = c = a;
console.log({a: a, b: b, c: c})

var str1 = "abhi";
var str2 = new String("abhi");
console.log(str1 == str2 ? 'yes' : 'no');
console.log(str1 === str2 ? 'yes' : 'no');

var obj1 = {name: "abhi"};
var obj2 = {name: "abhi"};
var obj3 = obj1;

if (obj1 == obj2) {
    console.log('obj1 & obj2 are equals');
} else {
    console.log('obj1 & obj2 are not equals');
}


if (obj1 == obj3) {
    console.log('obj1 & obj3 are equals');
} else {
    console.log('obj1 & obj3 are not equals');
}
'use strict';
console.log(obj1.name);
console.log(delete obj1.name);
console.log(obj1.name);

var stud = Object.freeze({
    name: 'xyz',
    age: 18,
});

console.log(stud.name);
console.log(delete stud.name);
console.log(stud.name);

console.log('          Hello world!                '.trim());
console.log('test string.\n test string 2.\n test string3');
console.log(`teststrin
teststring
teststring`)

let subject = 'javascript';
let Subject = 'LARAVEL';
console.log(Subject);
