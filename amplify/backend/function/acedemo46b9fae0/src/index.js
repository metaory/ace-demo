const Chance = require("chance");

// Instantiate Chance so it can be used
const chance = new Chance();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const rndArray = (length = 7) =>
	Array.from({ length }).fill(() => Math.floor(Math.random() * 100));

// [ ['Blueberry', 44], ['Strawberry', 23] ]

const makeResponse = (body) => ({
	statusCode: 200,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "*",
	},
	body,
});

exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	const lineChart = rndArray();
	const radar = [rndArray(), rndArray()];
	return makeResponse({ lineChart, radar, tmp: chance.word() });
};
