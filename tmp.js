const Chance = require('chance')
const chance = new Chance()

// [ ['Blueberry', 44], ['Strawberry', 23] ]

const data = Array.from({ length: 4 }).map(() => [chance.first(), Math.floor(Math.random() * 100)])
console.log('data:', data)

const event = { queryStringParameters: { type: 'foo' } }
// const event = { queryStringParameters: null };

const { queryStringParameters } = event
const { type } = queryStringParameters ?? { type: 'xx' }
console.log('type:', type)

const rnd = (max, min = 3) => Math.floor(Math.random() * max) + min

console.log(rnd(10))
console.log(rnd(10))
console.log(rnd(10))
console.log(rnd(10))
console.log(rnd(10))
console.log(rnd(10))
console.log(rnd(10))
console.log(rnd(10))
