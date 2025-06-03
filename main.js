const callbackExample = require('./callback');
const promiseExample = require('./promises');
const asyncAwaitExample = require('./asyncAwait');
const generatorExample = require('./generators');

console.log("CALLBACK EXAMPLE ");
callbackExample();

setTimeout(() => {
console.log("\n PROMISE EXAMPLE");
promiseExample();

setTimeout(() => {
console.log("\n ASYNC/AWAIT EXAMPLE ");
asyncAwaitExample().then(() => {
console.log("\n GENERATOR EXAMPLE ");
generatorExample();
});
}, 1500);
}, 1500);
