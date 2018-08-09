var https = require('https');

var url = "https://cloudresourcemanager.googleapis.com/v2beta1/folders/957776435343"

const options = {
		method: "GET",
		host: "cloudresourcemanager.googleapis.com",
		path: "/v2beta1/folders/957776435343",
		timeout: "30000"
}

const req = https.request(options, (res) => {
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(`BODY: ${chunk}`);
	});
	res.on('end', () => {
		console.log("No more data in response.");
	});
});

req.on('error', (error) => {
	console.error(`problem with request: ${e.message}`);
});

req.end();
