function generatorExample() {
console.log("\nRunning Generator Example:");

function* numberGenerator() {
yield 1;
yield 2;
yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
}

module.exports = generatorExample;
