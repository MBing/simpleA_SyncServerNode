const exec = require('child_process').exec;
const querystring = require('querystring');

const textareaTemplate = require('./textareaTemplate');

function sleep(ms) {
	const startTime = new Date().getTime();

	while(new Date().getTime() < startTime + ms);
	console.log('Sleep is done');
}

function start(response, postData) {
	console.log('Request handler start was called');

// This is synchronous, so will block all other requests on this server before this is finished.
	// sleep(10000);

	// response.writeHead(200, {
	// 	"Content-Type": "text/plain"
	// });
	// response.write('Hello Start with sleep');
	// response.end();

	// console.log('Request handler start is done');

// Because we use a callback here, this is non blocking, otherwise it's still blocking!!
	setTimeout(() => {
		console.log('Request handler start timeout is done');
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.write(textareaTemplate.body);
		response.end();
	}, 10000);

	// exec('find /', {
	// 	timeout: 10000, 
	// 	maxBuffer: 20000*1024
	// }, function (error, stdout, stderr) {
	// 	response.writeHead(200, {
	// 		"Content-Type": "text/plain"
	// 	});
	// 	response.write(stdout);
	// 	response.end();
	// });
}

function upload(response, postData) {
	console.log('Request handler upload was called');

	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write(`Hello Upload ${querystring.parse(postData).text}`);
	response.end();
}

exports.start = start;
exports.upload = upload;
