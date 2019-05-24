var person = `{
    "name": "mukesh",
    "age": 34
}`;

obj = JSON.parse(person);
console.log(obj);
console.log(obj.age);

console.log('reviver');
JSON.parse(person, (key, value) => {
    console.log(`${key} -> ${value}`);
})

var stringify = JSON.stringify(obj);
console.log(stringify);


var jsonstr = '{"message":"I\'m abhijeet"}';
obj2 = JSON.parse(jsonstr);
console.log(obj2);
console.log(JSON.stringify(obj2));

console.log(eval('var a=2; var b=5; a+b;'));