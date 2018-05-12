# Simple server example

To see a clear difference between synchronous and async in Node, this is a small setup.

Run this with node or use nodemon:

```
	$ node index.js
```

Open a browser and go to `localhost:8888/start`
Open another window/tab and go to `localhost:8888/upload`

Make sure when putting a blocker on the `start` requesthandler, that it doesn't block the `upload` request handler
