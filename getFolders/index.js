var https = require('https');

var url = "https://cloudresourcemanager.googleapis.com/v2beta1/folders/957776435343"

const options = {
		method: "GET",
		host: "cloudresourcemanager.googleapis.com",
		path: "/v2beta1/folders/957776435343",
		timeout: "30000"
}

exports.getFolders = (request, response) => {
	response.setEncoding('utf8');

	var req = https.request(options, (res) => {
		res.on('data', (chunk) => {
			response.write(chunk);
		});
		response.status(200);
	});
	
	req.on('error', (error) => {
		response.write(error.message);
		response.status(500);
	});

	response.end();
};
