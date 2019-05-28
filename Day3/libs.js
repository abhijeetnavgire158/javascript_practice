export const Sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}

export function mapEachArray (array, fn) {
    var newArray = [];
    array.forEach(function(value) {
        newArray.push(fn(value));
    });

    return newArray;
}