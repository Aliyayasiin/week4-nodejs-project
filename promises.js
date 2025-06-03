function promiseExample() {
console.log("\nRunning Promise Example:");

const producingCode = new Promise((resolve, reject) => {
let isSuccessful = true;

if (isSuccessful) {
resolve("Success! The promise was resolved.");
} else {
reject("Error! The promise was rejected.");
}
});

producingCode
.then((result) => {
console.log("Promise result:", result);
})
.catch((error) => {
console.log("Promise error:", error);
});
}

module.exports = promiseExample;
