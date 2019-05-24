let now =new Date();
console.log("Now: " + now);

let bday = new Date('1991-06-27');
console.log("Bday: "+ bday);

//Year|Month index start with 0|
let bday2 = new Date(1991,05,27);
console.log("Bday2: "+ bday2);

console.log("get Date: " + bday2.getDate());
console.log("Day: " + bday2.getDay());
console.log("Fullyear: " + bday2.getFullYear());
console.log("Month: " + bday2.getMonth());

bday2.setHours(14);
bday2.setMinutes(02);
console.log("New Bday: " + bday2);

