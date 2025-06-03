function callbackExample() {
console.log("Running Callback Example 1:");

function myDisplayer(something) {
console.log("Callback result:", something);
}

function myCalculator(num1, num2, callback) {
const sum = num1 + num2;
callback(sum);
}

myCalculator(5, 10, myDisplayer);


console.log("\nRunning Callback Example 2:");

function greetUser(name, callback) {
setTimeout(() => {
console.log("Hello,", name);
callback();
}, 1000);
}

function afterGreet() {
console.log("This is the callback after greeting.");
}

greetUser("Aliyo", afterGreet);
}

module.exports = callbackExample;
