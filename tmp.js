const Chance = require("chance");
const chance = new Chance();

// [ ['Blueberry', 44], ['Strawberry', 23] ]

const data = Array.from({ length: 4 }).map(() => [
	chance.first(),
	Math.floor(Math.random() * 100),
]);
console.log("data:", data);

const rnd = Math.floor(Math.random() * 10);

console.log("rnd:", rnd);
