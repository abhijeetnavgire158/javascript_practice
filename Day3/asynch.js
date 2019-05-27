// function waitFor3Sec() {
//     var ms = 3000 + new Date().getTime();
//     while(new Date() < ms) {}

//     console.log('Function is finished')
// }

function waitFor3Sec() {
    setTimeout(function() {
        console.log('Time out function is finished (3 sec)')
    }, 3000);

    setTimeout(function() {
        console.log('Time out function is finished (1 Sec)')
    }, 1000);

    setTimeout(function() {
        console.log('Time out function is finished (2 sec)')
    }, 2000);
    console.log('Function is finished')
}

console.log('Script execution start');
setTimeout(function() {
    console.log('Time out function is finished outside (3 sec)')
}, 3000);
waitFor3Sec();
setTimeout(function() {
    console.log('Time out function is finished outside-2 (3 sec)')
}, 3000);
console.log('Script execution ends')