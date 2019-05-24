console.time();
//console.clear();

const errorMsg = 'the # is not even';
console.group();
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});  
    console.count();
}
console.groupEnd();

console.group();
console.countReset();
console.count();
console.debug(errorMsg);
console.groupEnd();
var obj1 = {
    name: 'abhi',
    age: 28
}

console.dir(obj1);
console.table(obj1);

console.timeEnd();
