function message(say, callback) {
    console.log("SAY :" + say);
    callback();
}

function callbackFunction() {
    console.log("After Say printed :" + this.say);
}

var nothingSayobj = {say: 'nothing'};
callback=callbackFunction.bind(nothingSayobj);

message("Hi!", callbackFunction);
message("Hi!", callback);

titleStyle = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

titleStyle.forEach(function(index, value) {
    console.log(index + ' -> ' + value);
});


var clientData = {
    id: 01110,
    fullName: 'not set',
    setFullName: function(firstName, lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
}

function getUserInputs(firstName, lastName, callback) {
    console.log('getUserInputs ' + firstName + ' -- ' + lastName);
    callback(firstName, lastName);
}

getUserInputs("Abhi", "Navgire", clientData.setFullName);
console.log("Normal Call (Fullname) "+ clientData.fullName);

function getUserInputsWithCallbackObject(firstName, lastName, callback, callbackObject) {
    console.log('getUserInputsWithCallbackObject ' + firstName + ' -- ' + lastName);
    //callback.apply(callbackObject,[firstName, lastName]);
    callback.call(callbackObject, firstName, lastName);
}

getUserInputsWithCallbackObject("abhi", "navgire", clientData.setFullName, clientData);
console.log("After Append clientObject(Fullname) " + clientData.fullName);
