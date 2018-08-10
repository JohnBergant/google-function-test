var https = require('https');
const resource = require('@google-cloud/resource');
const projectId = 'fluted-protocol-212821'

const resourceClient = new Resource({
	projectId: projectId
});

exports.getFolders = (request, response) => {
  resourceClient.getProjects().then(
    results => {
      const projects = results[0];
      projects.forEach(project => request.write(project.id));
    })
    .catch(err => {
      request.write(err.message);
    });
};
