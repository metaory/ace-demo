const Chance = require("chance");
const chance = new Chance();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const rndArray = (length = 7) =>
	Array.from({ length }).map(() => Math.floor(Math.random() * 100));

// [ ['Blueberry', 44], ['Strawberry', 23] ]

const makeResponse = (data) => ({
	statusCode: 200,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "*",
	},
	body: JSON.stringify(data),
});

const rnd = (scale) => Math.floor(Math.random() * scale);

exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	const lineChart = rndArray();
	const radar = [rndArray(), rndArray()];

	const pieChart = Array.from({ length: rnd(10) }).map(() => [
		chance.first(),
		rnd(100),
	]);

	return makeResponse({ lineChart, radar, pieChart });
};
