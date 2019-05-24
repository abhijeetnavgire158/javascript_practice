var pattern =new RegExp('[^a-zA-Z]', 'i');

var string = 'AABC';

if (pattern.exec(string)) {
    console.log('yes');
} else {
    console.log('no');
}

var mobilePatter = new RegExp('^[7-9]{1}[0-9]{9}$');
var mobileNumber = '7888888888';
if (mobilePatter.test(mobileNumber)) {
    console.log('Correct mobile number');
} else {
    console.log('Wrong mobile number');
}