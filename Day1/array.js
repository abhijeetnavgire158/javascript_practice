var arr1 = [10, 20, 30];
console.log(arr1);

arr1.push(40);

console.log('array length ' + arr1.length);
console.log('\nFor Each');
arr1.forEach(function(value,index,tmpArr){
    console.log(`${value} - ${index} - ${tmpArr}`);
});

console.log('\nfor In');
for(let index in arr1){
    console.log(`${index} - ${arr1[index]}`);
}

console.log('\n for Of');
for(let value of arr1){
    console.log(`${value}`);
}
console.log(arr1.indexOf(20));

var arr2 = new Array();
arr2.push(1)
arr2.push(...[2,3]);
console.log("After push " + arr2);
arr2.pop();
console.log("After Pop " + arr2);

console.log('\n vegetables :');
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
//splice method :first parameter for index & 2nd parameter for remove the number of elments from that
var removedItems = vegetables.splice(2,2); 
console.log(vegetables);
console.log(removedItems);

var shallowCopy = vegetables.slice();
shallowCopy.push('PP');
console.log(shallowCopy);
var multiDArr = [[1, 2, 3], [4, 5, 6], [['Abhijeet', 'Navgire', [28, 'pune']]]];
console.log(multiDArr);
console.log(multiDArr.toString());
vegetables[5] = 'Carrot';
console.log(vegetables);
console.log(Object.keys(vegetables).length);
console.log(vegetables.length);
vegetables.length=2;
console.log(vegetables);
console.log("IS Array "+ Array.isArray(vegetables));
console.log("IS Array "+ Array.isArray({a:2, b:3}));




