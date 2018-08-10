var https = require('https');

const options = {
		method: "GET",
		host: "cloudresourcemanager.googleapis.com",
		path: "/v2beta1/folders/957776435343",
		timeout: "30000"
}

exports.getFolders = (request, response) => {
	let rawData = '';
	let responseCode = 0;

	var req = https.getrequest(options, (res) => {
		res.on('data', (chunk) => { rawData += chunk; });
	});
	
	responseCode = res.statusCode;

	req.on('error', (error) => {
		rawData = error.message;
		response.write(error.message);
		responseCode = 500;
	});
	
	response.write(rawData);
	response.statusCode = responseCode;
	response.end();

	req.end();
};
