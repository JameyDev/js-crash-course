let x = 20;

if (x < 30) {
    let x = 31;
    console.log(x); // 31
}

console.log(x); // 20

if (x > 0) {
    let y = 10;
}

console.log(y); // ReferenceError
