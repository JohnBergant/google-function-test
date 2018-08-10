var https = require('https');

const options = {
		method: "GET",
		host: "cloudresourcemanager.googleapis.com",
		path: "/v2beta1/folders/957776435343",
		timeout: "30000"
}

exports.getFolders = (request, response) => {
	var req = https.request(options, (res) => {
		res.on('data', (chunk) => { 
			response.write(JSON.parse(chunk)); 
		});
		responseCode = res.statusCode;
	});
	
	req.on('error', (error) => {
		response.write(error.message);
		responseCode = 500;
	});

	req.end();
	
	response.statusCode = responseCode;
	response.end();
};
