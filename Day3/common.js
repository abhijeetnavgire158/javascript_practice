var PI = Math.PI;

function factorial(value) {
    // var factPromise = new Promise(function(resolve, reject){
    //     parseInt(value)
    // })
    var factValue = 1;
    for(i = value; i>=1; i--) {
        factValue = factValue * i;
    }

    return factValue;
}

module.export = {
    PI: PI,
    factorial: factorial
}