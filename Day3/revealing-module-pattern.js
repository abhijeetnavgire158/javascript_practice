var revealingModulePattern = (function() {
    var privateVar = 1;
    return {
        square: function(x) {
            return x * x;
        },
        publicFun1: function() {
            console.log('Public Function 1 call');
        }
    }
}());
var square = revealingModulePattern.square(2);
console.log(square);
revealingModulePattern.publicFun1();

console.log(revealingModulePattern.privateVar);