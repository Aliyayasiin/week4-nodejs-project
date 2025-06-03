const checkNumber = (num) => {
return new Promise((resolve, reject) => {
if (num > 0) resolve("Positive number");
else reject("Not a positive number"); });
};

checkNumber(10)
.then((msg) => console.log(msg))
.catch((err) => console.log(err));
