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

const handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	const lineChart = rndArray();
	const radar = [rndArray(), rndArray()];
	return makeResponse({ lineChart, radar, tmp: chance.word() });
};

exports.handler = handler;

// const res = handler({
// 	resource: "/items/{proxy+}",
// 	path: "/items/foo",
// 	httpMethod: "GET",
// 	headers: {
// 		Accept: "application/json, text/plain, */*",
// 		"Accept-Encoding": "gzip, deflate, br",
// 		"Accept-Language": "en-US,en;q=0.9",
// 		"cache-control": "no-cache",
// 		"CloudFront-Forwarded-Proto": "https",
// 		"CloudFront-Is-Desktop-Viewer": "true",
// 		"CloudFront-Is-Mobile-Viewer": "false",
// 		"CloudFront-Is-SmartTV-Viewer": "false",
// 		"CloudFront-Is-Tablet-Viewer": "false",
// 		"CloudFront-Viewer-ASN": "9930",
// 		"CloudFront-Viewer-Country": "MY",
// 		Host: "x477h82ll9.execute-api.ap-southeast-1.amazonaws.com",
// 		origin: "http://localhost:5173",
// 		pragma: "no-cache",
// 		Referer: "http://localhost:5173/",
// 		"sec-ch-ua": '"Chromium";v="115", "Not/A)Brand";v="99"',
// 		"sec-ch-ua-mobile": "?0",
// 		"sec-ch-ua-platform": '"Linux"',
// 		"sec-fetch-dest": "empty",
// 		"sec-fetch-mode": "cors",
// 		"sec-fetch-site": "cross-site",
// 		"User-Agent":
// 			"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
// 		Via: "2.0 dcfc5a16b46245a98c7edc81022dec2c.cloudfront.net (CloudFront)",
// 		"X-Amz-Cf-Id": "a5d2X17xKHkTNQsm3ynYDazgl3Yx6J-hLJB3PuIF5enpeBxvAF6fMA==",
// 		"x-amz-date": "20230714T051149Z",
// 		"X-Amz-Security-Token":
// 			"IQoJb3JpZ2luX2VjEIX//////////wEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgbCpCeMgBsfsjDuhbf6ovEQ0GEWsBXUCALbDwFxkBbTQCIQC0+oZJaAVrPmMoZoMgv0pBg29J/Qr91oo2XZJRmIgxVirrBAj+//////////8BEAAaDDA2Mjg5MDkwMDEwMSIMzG8vw7nVmZ280ArPKr8EFv0p634uSfJUAMbo7myBNttRQR0qmjRdNXUkGttphlJ+2vdzPcs9AEk54flobRbilFI12pfUo1wqxLkxAWs+K76xrqym80AYC9hnkMG1XDlAJm4c5WJCqdjq4ynSE3xkSA5U+z7qMHC4/msrr4mYMw2ngbkzP6StVc3lQzxlT9QPq/EUMcBjORDBanIvUi3uwdcGXOWB286nii+cjjMprHf1IZA3SFhQKE1aMWBVOPNeXjnayirpv2LwH08x8t2Ru8N+oX+tXHrc3tCo1RE2UVGeORhdbDxEu50rg3LaKJZ0sHk937j/nYlrluSLmVKjJ3PP2JidDTBOzhllgI+K9ZuEV7WPB4t2yfIbtZ1RSjvv6wUQOClaecso6LwBILdtcPgRd3rS3WgyXdfyQ1teYRdPwlZNAS9DBPwaxIGoQEtFgpgh5GJ3wiDq1EKK8VToDJkggru3HS9CKwCsfuJxGPW8sz4qtCV4ZYCPAtVokfU0VsmSyufl3OABJ1xGHSc6TPAcYeTuzBGx1dlrIHY2WtLFutlAVzm2gKsXsChBpFiTAZfTmtuABtQebfrY8Ios0tLkcZTAaUFB9oofsnBNT2LCt+JlN+NFRdC9ftGns7TqbrmEyIwj3mV6JLrY9f9X/RzlnsC8bgrAPC1JVya8+zF6sQEn1K7Ar9XXYo9bhtayjPVZCOEQhfGvBmrpu5hC0ZeXNtug5U7wcfuD+CBLsHVEJIzuxkawv1MQhjiyR6UUhrmS1E5a8RtRUDQ+t6YwlbLDpQY6hQJsNPm+OnlQ4H9/N63r8qCKS8Q6HfQITV687XC12GvzC240YmKYsQ+HmK4/TiACFwFpBSf0fuM1OHQgL8M/9b2dcdcP1sybZTddpFmuHGjT4bxyypHMgkY/dzHvgAcdFoaxG6QXgzLGYDWNDLN6GP9146EVPLXsEtGvjsqDIBdfecLqM+llpX4RWlvqAoURPEyZxq8gB7UdX7o+zJ5bpxY6cqNvlfn0cACOb5xVCWKG8hH31myaaD6NyTy666rTZiMB8NZnlzX9t4/PQaORI+b6aGqIT7YiYPcn/UPZK43Fr/SDrMW/blK7BpI4SyZRUaXUmB/OGDUmo1p/y9FywLIWhYI5+R4=",
// 		"X-Amzn-Trace-Id": "Root=1-64b0d915-3f62aaf440b63610189bea06",
// 		"X-Forwarded-For": "61.6.51.150, 130.176.146.69",
// 		"X-Forwarded-Port": "443",
// 		"X-Forwarded-Proto": "https",
// 	},
// 	multiValueHeaders: {
// 		Accept: ["application/json, text/plain, */*"],
// 		"Accept-Encoding": ["gzip, deflate, br"],
// 		"Accept-Language": ["en-US,en;q=0.9"],
// 		"cache-control": ["no-cache"],
// 		"CloudFront-Forwarded-Proto": ["https"],
// 		"CloudFront-Is-Desktop-Viewer": ["true"],
// 		"CloudFront-Is-Mobile-Viewer": ["false"],
// 		"CloudFront-Is-SmartTV-Viewer": ["false"],
// 		"CloudFront-Is-Tablet-Viewer": ["false"],
// 		"CloudFront-Viewer-ASN": ["9930"],
// 		"CloudFront-Viewer-Country": ["MY"],
// 		Host: ["x477h82ll9.execute-api.ap-southeast-1.amazonaws.com"],
// 		origin: ["http://localhost:5173"],
// 		pragma: ["no-cache"],
// 		Referer: ["http://localhost:5173/"],
// 		"sec-ch-ua": ['"Chromium";v="115", "Not/A)Brand";v="99"'],
// 		"sec-ch-ua-mobile": ["?0"],
// 		"sec-ch-ua-platform": ['"Linux"'],
// 		"sec-fetch-dest": ["empty"],
// 		"sec-fetch-mode": ["cors"],
// 		"sec-fetch-site": ["cross-site"],
// 		"User-Agent": [
// 			"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
// 		],
// 		Via: ["2.0 dcfc5a16b46245a98c7edc81022dec2c.cloudfront.net (CloudFront)"],
// 		"X-Amz-Cf-Id": ["a5d2X17xKHkTNQsm3ynYDazgl3Yx6J-hLJB3PuIF5enpeBxvAF6fMA=="],
// 		"x-amz-date": ["20230714T051149Z"],
// 		"X-Amz-Security-Token": [
// 			"IQoJb3JpZ2luX2VjEIX//////////wEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgbCpCeMgBsfsjDuhbf6ovEQ0GEWsBXUCALbDwFxkBbTQCIQC0+oZJaAVrPmMoZoMgv0pBg29J/Qr91oo2XZJRmIgxVirrBAj+//////////8BEAAaDDA2Mjg5MDkwMDEwMSIMzG8vw7nVmZ280ArPKr8EFv0p634uSfJUAMbo7myBNttRQR0qmjRdNXUkGttphlJ+2vdzPcs9AEk54flobRbilFI12pfUo1wqxLkxAWs+K76xrqym80AYC9hnkMG1XDlAJm4c5WJCqdjq4ynSE3xkSA5U+z7qMHC4/msrr4mYMw2ngbkzP6StVc3lQzxlT9QPq/EUMcBjORDBanIvUi3uwdcGXOWB286nii+cjjMprHf1IZA3SFhQKE1aMWBVOPNeXjnayirpv2LwH08x8t2Ru8N+oX+tXHrc3tCo1RE2UVGeORhdbDxEu50rg3LaKJZ0sHk937j/nYlrluSLmVKjJ3PP2JidDTBOzhllgI+K9ZuEV7WPB4t2yfIbtZ1RSjvv6wUQOClaecso6LwBILdtcPgRd3rS3WgyXdfyQ1teYRdPwlZNAS9DBPwaxIGoQEtFgpgh5GJ3wiDq1EKK8VToDJkggru3HS9CKwCsfuJxGPW8sz4qtCV4ZYCPAtVokfU0VsmSyufl3OABJ1xGHSc6TPAcYeTuzBGx1dlrIHY2WtLFutlAVzm2gKsXsChBpFiTAZfTmtuABtQebfrY8Ios0tLkcZTAaUFB9oofsnBNT2LCt+JlN+NFRdC9ftGns7TqbrmEyIwj3mV6JLrY9f9X/RzlnsC8bgrAPC1JVya8+zF6sQEn1K7Ar9XXYo9bhtayjPVZCOEQhfGvBmrpu5hC0ZeXNtug5U7wcfuD+CBLsHVEJIzuxkawv1MQhjiyR6UUhrmS1E5a8RtRUDQ+t6YwlbLDpQY6hQJsNPm+OnlQ4H9/N63r8qCKS8Q6HfQITV687XC12GvzC240YmKYsQ+HmK4/TiACFwFpBSf0fuM1OHQgL8M/9b2dcdcP1sybZTddpFmuHGjT4bxyypHMgkY/dzHvgAcdFoaxG6QXgzLGYDWNDLN6GP9146EVPLXsEtGvjsqDIBdfecLqM+llpX4RWlvqAoURPEyZxq8gB7UdX7o+zJ5bpxY6cqNvlfn0cACOb5xVCWKG8hH31myaaD6NyTy666rTZiMB8NZnlzX9t4/PQaORI+b6aGqIT7YiYPcn/UPZK43Fr/SDrMW/blK7BpI4SyZRUaXUmB/OGDUmo1p/y9FywLIWhYI5+R4=",
// 		],
// 		"X-Amzn-Trace-Id": ["Root=1-64b0d915-3f62aaf440b63610189bea06"],
// 		"X-Forwarded-For": ["61.6.51.150, 130.176.146.69"],
// 		"X-Forwarded-Port": ["443"],
// 		"X-Forwarded-Proto": ["https"],
// 	},
// 	queryStringParameters: null,
// 	multiValueQueryStringParameters: null,
// 	pathParameters: {
// 		proxy: "foo",
// 	},
// 	stageVariables: null,
// 	requestContext: {
// 		resourceId: "jo9bok",
// 		resourcePath: "/items/{proxy+}",
// 		httpMethod: "GET",
// 		extendedRequestId: "ICbbbHIvyQ0FeBA=",
// 		requestTime: "14/Jul/2023:05:11:49 +0000",
// 		path: "/dev/items/foo",
// 		accountId: "062890900101",
// 		protocol: "HTTP/1.1",
// 		stage: "dev",
// 		domainPrefix: "x477h82ll9",
// 		requestTimeEpoch: 1689311509602,
// 		requestId: "99bbf502-0cb5-405d-993c-42b40c54a11d",
// 		identity: {
// 			cognitoIdentityPoolId:
// 				"ap-southeast-1:0d6e1cc7-d2bc-4608-b07e-ea55171a19f1",
// 			accountId: "062890900101",
// 			cognitoIdentityId: "ap-southeast-1:51e949b5-c742-4ef9-9123-3a8752e19419",
// 			caller: "AROAQ5JEW7KC3IQKK5363:CognitoIdentityCredentials",
// 			sourceIp: "61.6.51.150",
// 			principalOrgId: "o-661bqzf0pk",
// 			accessKey: "ASIAQ5JEW7KCQPTPVZLS",
// 			cognitoAuthenticationType: "authenticated",
// 			cognitoAuthenticationProvider:
// 				"cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_ghUaOj53i,cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_ghUaOj53i:CognitoSignIn:187bea8c-e4ca-4f66-b471-d8d450193ede",
// 			userArn:
// 				"arn:aws:sts::062890900101:assumed-role/amplify-acedemo-dev-141516-authRole/CognitoIdentityCredentials",
// 			userAgent:
// 				"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
// 			user: "AROAQ5JEW7KC3IQKK5363:CognitoIdentityCredentials",
// 		},
// 		domainName: "x477h82ll9.execute-api.ap-southeast-1.amazonaws.com",
// 		apiId: "x477h82ll9",
// 	},
// 	body: null,
// 	isBase64Encoded: false,
// });
// console.log("res:", res);
