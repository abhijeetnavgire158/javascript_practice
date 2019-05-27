function a() {
    console.log('a calls');
    b();
    var a = 'YES';
}

function b() {
    console.log('b calls');
    var b = 'No';
}

a();
var d = 'Global scope';
console.log(d);