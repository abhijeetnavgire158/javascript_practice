/*
The this keyword references the calling object which provides access to the calling object’s
properties.
*/

var cricketer = {
    _name: "MS Dhoni",
    favShot: "helicopter shot",
    otherInfo() {
        console.log("w/k Batsmen , finisher, formal Captain")
    },
    getInfo() {
        console.log("Info: " + this._name + ' - ' + this.favShot);
    }
}

cricketer.otherInfo();
cricketer.getInfo();


//Arrow function
var cricketer2 = {
    _name: "MS Dhoni",
    favShot: "helicopter shot",
    get fullname() {
        return this._name;
    },
    otherInfo() {
        console.log("w/k Batsmen , finisher, formal Captain")
    },
    getInfo: ()=> {
        console.log("Info: " + this._name + ' - ' + this.favShot);
    }  
}

cricketer2.otherInfo();
cricketer2.getInfo(); //undefined

cricketer2._name = "Virat Kohli";
console.log(cricketer2);

//Arrow function
var cricketer3 = {
    _name: "MS Dhoni",
    favShot: "helicopter shot",
    _age: 38,
    get fullname() {
        return (this._name) ? this._name : 'Missing name';
    },
    set age(newAge) {
        if(typeof newAge === 'number') {
            this._age = newAge;
        } else {
            console.log('You must assign a number to age');
        }
    },
    get age() {
        return this._age;
    }
}
console.log(cricketer3.fullname);
cricketer3._name = '';
console.log(cricketer3.fullname);
cricketer3.age = 40;
console.log(cricketer3._age);
console.log(cricketer3.age);



console.log("***Cricketrs***");
var cricketers = (name, age, type, jersey) => {
    return {
        name: name,
        age: age,
        type: type,
        jersey: jersey,
        getInfo: function() {
            console.log(`
            Fullname : ${this.name}
            Age: ${this.age}
            Type: ${this.type}
            Jersey No.: ${this.jersey}`);
        }
    }
}

var player1 = cricketers('Shikhar Dhavan', 34, 'Batsmen', 23);
var player2 = cricketers('Virat Kohli', 29, 'Batsmen', 18);

var indianPlayers = [player1, player2];
console.log(player1);
console.log(indianPlayers);
console.log(Object.keys(player1));
console.log(Object.values(player1));

console.log('comparing objects');
obj1 = {a: 1};
obj2 = {a: 1};
obj3 = obj1

console.log('Compare 2 objects');
if (obj1 == obj2) {
    console.log('Obj1 & Obj 2 are equals');
} else {
    console.log('not equals');
}

console.log('JSON stringify');
if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log('Obj1 & Obj 2 are equals');
} else {
    console.log('not equals');
}

if (obj1 == obj3) {
    console.log('Obj1 & Obj 3 are equals');
} else {
    console.log('not equals');
}

const person = {
    name: "Abhijeet navgire",
    info: function() {
        console.log(`I'm ${this.name}`);
    }
}

person.info();
const person2 = Object.create(person);
person2.name = "Mukesh A";
person2.info();
person.info();



var objBB = cricketers('a', 2, 'bb', 2);
var objBB2 = cricketers('a', 2, 'bb', 2);
objBBCopyByRef = objBB;
console.log(objBB==objBB2);
console.log(objBB==objBBCopyByRef);

objBBCopyByRef.name = 'zz';
console.log(objBBCopyByRef.name);
console.log(objBB.name);
