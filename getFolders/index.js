var https = require('https');

var url = "https://cloudresourcemanager.googleapis.com/v2beta1/folders/957776435343"

const options = {
		method: "GET",
		host: "cloudresourcemanager.googleapis.com",
		path: "/v2beta1/folders/957776435343",
		timeout: "30000"
}

exports.getFolders = (request, response) => {
	let rawData = '';
	let responseCode = 200;

	var req = https.getrequest(options, (res) => {
		res.on('data', (chunk) => { rawData += chunk; });
	});
	
	responseCode = res.statusCode;

	req.on('error', (error) => {
		rawData = error.message;
		response.write(error.message);
		responseCode = 500;
	});
	
	response.write("TESTING!!!");
	response.statusCode = responseCode;
	response.end();i

	req.end();
};
