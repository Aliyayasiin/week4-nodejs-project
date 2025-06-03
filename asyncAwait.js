const getData = () => {
return new Promise((resolve) => {
setTimeout(() => resolve("Data loaded"), 1000);});
};

async function fetchData() {
const result = await getData();
console.log(result);
}

fetchData();
