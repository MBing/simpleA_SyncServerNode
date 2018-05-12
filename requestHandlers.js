// const exec = require('child_process').exec;
const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

// const textareaTemplate = require('./textareaTemplate');
const imageHTMLTemplate = require('./imageHTMLTemplate');

// function sleep(ms) {
// 	const startTime = new Date().getTime();

// 	while(new Date().getTime() < startTime + ms);
// 	console.log('Sleep is done');
// }

function start(response) {
	console.log('Request handler start was called');

// This is synchronous, so will block all other requests on this server before this is finished.
// In our case this is intended as we are uploading an image and can't show it before the upload is finished.
	// sleep(10000);

	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write(imageHTMLTemplate.body);
	response.end();

// Because we use a callback here, this is non blocking, otherwise it's still blocking!!
	// setTimeout(() => {
	// 	console.log('Request handler start timeout is done');
	// 	response.writeHead(200, {
	// 		"Content-Type": "text/html"
	// 	});
	// 	response.write(textareaTemplate.body);
	// 	response.end();
	// }, 10000);

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

function upload(response, request) {
	console.log('Request handler upload was called');

// When the form is only to upload some text this is enough:
	// response.writeHead(200, {
	// 	"Content-Type": "text/plain"
	// });
	// response.write(`You've sent the text: ${querystring.parse(postData).text}`);
	// response.end();

	// We will upload an image and need formidable to make the implementation smooth.
	const form = new formidable.IncomingForm();
	console.log('About to parse');
	form.parse(request, function (error, fields, files) {
		console.log('Parsing done.');

		// Possible error on Windows when trying to rename an already existing file.
		fs.rename(files.upload.path, './tmp/test.png', function (error) {
			if (error) {
				fs.unlink('./tmp/test.png');
				fs.rename(files.upload.path, './tmp/test.png');
			}
		});

		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.write(`
			received image:
			<img src="/show" />
		`);
		response.end();
	});
}

function show(response) {
	console.log('Request handler `show` was called.')

	response.writeHead(200, {
		"Content-Type": "image/png"
	});
	fs.createReadStream('./tmp/test.png').pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
