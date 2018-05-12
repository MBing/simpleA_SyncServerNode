# Simple server example

To see a clear difference between synchronous and async in Node, this is a small setup.

Run this with node or use nodemon:

```
	$ node index.js
```

## Image upload (png only!)
The png image you try to upload is running in a synchronous way, so when going to other endpoints while the image isn't uploaded, will result in undefined. The images are uploaded in the folder `./tmp`

## Testing the commented code with examples
Open a browser and go to `localhost:8888/start`
Open another window/tab and go to `localhost:8888/upload`

### Extra Info:
Make sure when putting a blocker on the `start` requesthandler, that it doesn't block the `upload` request handler

This is testing code to clarify some examples, so a lot of commented code in here. 😉
