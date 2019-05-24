function NotPositiveNumberException(message='') {
    message = message ? message : 'Number is must be an positive';
    return Error(message);
}
var a = 10;
var b = 0;
try {
    if (b <= 0) {
        throw new NotPositiveNumberException();
    }
    console.log(`${a}/${b} = ${a/b}`);
} catch (e) {
    console.log(e);
} finally {
    console.log("finally block is always executed");
}



