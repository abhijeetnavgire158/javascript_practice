function person(name , age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

let father = new person("testa testa", 58, "Orange");
let mother = new person("testb testb", 50, "Blue");

person.prototype.getName = function() {
    return "Name : " + this.name; 
}

mother.getName = function() {
    return "(mother object) Name : " + this.name; 
}
console.log(father.name);
console.log(mother.name);
console.log(mother.getName());
console.log("hasOwnPropert: " + mother.hasOwnProperty('name')); 
console.log("getName In Father object : " + father.hasOwnProperty('getName'));//false , because getName is prototype of person
console.log("getName In Mother object: " + mother.hasOwnProperty('getName'));//true, because we overwrite this method

//let child = new mother("ff", 21, "Blue");
console.log(mother);

console.log(mother instanceof person);
console.log(mother instanceof Object);