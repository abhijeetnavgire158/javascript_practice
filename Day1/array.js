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
console.log(arr1.indexOf(200));

var arr2 = new Array();
arr2.push(1)
arr2.push(...[2,3]);
console.log(arr2);