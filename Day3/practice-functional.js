function mapForEach(arr, fn) {
    var newArr = [];
    arr.forEach(function(value){
        newArr.push(fn(value));
    });

    return newArr;
}

arr = [2, 3, 4];

var multiplyBy2 = mapForEach(arr, function(value) {
   return value * 2; 
});

console.log(arr);
console.log(multiplyBy2);

var evenOddFunction = function(type, value) {
    if (type === 'even') {
        return (value % 2 === 0) ? value : false;
    } else {
        return (value % 2 !== 0) ? value : false;
    }
}

var evenNumbers = mapForEach(arr, function(value){
    return (value % 2 === 0) ? value : false;
});

console.log(evenNumbers);



var oddNumbers = mapForEach(arr, evenOddFunction.bind(this, 'odd'));
console.log(oddNumbers);

var newEvenOddFunction = function(type) {
    return function(type, value) {
        if (type === 'even') {
            return (value % 2 === 0) ? value : false;
        } else {
            return (value % 2 !== 0) ? value : false;
        }
    }.bind(this, type);
}
var newOddNumbers = mapForEach(arr, newEvenOddFunction('odd'));
console.log(newOddNumbers);

var newEvenNumbers = mapForEach(arr, newEvenOddFunction('even'));
console.log(newEvenNumbers);