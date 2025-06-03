function myDisplayer(something) {
console.log("Result:", something);
}

function myCalculator(num1, num2, callback) {
let sum = num1 + num2;
callback(sum);
}

myCalculator(5, 3, myDisplayer);
