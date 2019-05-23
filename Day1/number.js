var num1 = new Number('11s3');
console.log(num1);

var num2 = Number('23asdasd');
console.log(num2);

console.log(Number.NaN);

var num3 = parseFloat('123.324');
console.log(num3);

if(Number.isNaN(num2)) {
    console.log('num2 not a number');
}

if(Number.isNaN(num3)) {
    console.log('num3 Not a number')
}

if(Number.isInteger(num3)) {
    console.log(`${num3} is integer`)
}

//var num4 = new Number('34.4545');
var num4 = 36.993249;
console.log(`${num4} => ${num4.toPrecision(5)}`)
console.log(`${num4} => ${num4.toFixed()}`)