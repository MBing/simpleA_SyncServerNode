const http = require('http');
const url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
		const pathname = url.parse(request.url).pathname;
		let postData = '';
		console.log(`Request for ${pathname} received.`);

		// to make the whole process non blocking, Node.js serves our POST data in small chunks,
		// callbacks that are called upon certain events.
		// -> data
		// -> end
		request.addListener('data', function (postDataChunk) {
			postData += postDataChunk;
		});

		request.addListener('end', function () {
			route(handle, pathname, response, postData);
		})
	}

	http.createServer(onRequest).listen(8888);
	console.log('Server has started');
}

exports.start = start;