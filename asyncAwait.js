async function asyncAwaitExample() {
console.log("\nRunning Async/Await Example:");

const getData = () => {
return new Promise((resolve) => {
setTimeout(() => resolve("Data loaded with async/await"), 1000);
});
};

const result = await getData();
console.log(result);
}

module.exports = asyncAwaitExample;
