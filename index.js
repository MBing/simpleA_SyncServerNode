const server = require('./config/server');
const router = require('./config/router');
const requestHandlers = require('./config/requestHandlers');

const handle = {
	'/': requestHandlers.start,
	'/start': requestHandlers.start,
	'/upload': requestHandlers.upload,
	'/show': requestHandlers.show
};

server.start(router.route, handle);
