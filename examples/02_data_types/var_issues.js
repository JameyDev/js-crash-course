var ten = 10; // global variable

function funkyFunc() {
    var ten = 5; // local variable
    console.log(`The var declared variable in funkyFunc's scope: ${ten}`); // 5
}

funkyFunc(); // calling funkyFunc -> ten is 5?

console.log(`The var declared variable in global scope: ${ten}`); // 10

// Example 2
var twelve = 12;

console.log(twelve); // 12

if (twelve > 10) {
    var twelve = 13;
}

console.log(twelve); // 13




