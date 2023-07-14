const Chance = require("chance");
const chance = new Chance();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*"
};

const rnd = (max) => Math.floor(Math.random() * max) + 2;

const rndArray = (length = 7) => Array.from({ length }).map(() => rnd(100));

const makeResponse = (data) => ({
  statusCode: 200,
  headers,
  body: JSON.stringify(data)
});

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const { queryStringParameters } = event;
  const { type } = queryStringParameters ?? { type: "animal" };

  const lineChart = rndArray();
  const radar = [rndArray(), rndArray()];

  const length = rnd(6);
  const pieChart = Array.from({ length }).map(() => [chance[type](), rnd(100)]);

  return makeResponse({ lineChart, radar, pieChart });
};
