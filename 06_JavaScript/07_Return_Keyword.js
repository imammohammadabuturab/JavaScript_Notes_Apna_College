// return keyword is used to return some value from the function.
// input -> Function(does some work) -> output

// function funcName(arg1, arg2..) {
//     //do something
//     return val;
// }

function sum(a, b) {
    return a+b;
}

console.log(sum(3, 4));
console.log(sum(sum(1, 2), 3));

function sam(a, b) {
    console.log("hello");
    console.log("hello");
    return a+b;
    console.log("hello2"); // this will not be executed
    console.log("hello2");
}
console.log(sam(1, 2));