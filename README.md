To run production level build: 
* `npm install --production`
* `node server.js`

Uses lightweight express server to serve files from build folder. Just fyi, when
clicking the 'Buy Now' button, there is no UI responsivenessessess (unless you count lookng
at the console and seeing the 404 message). If you want a deeper look into how the state changes
w/ redux etc, run the developement build, which logs any and all state changes. 

To run production build: 
* `npm install` 
* `npm start` (will start webpack dev server w/ hot reloading)

Closing thoughts and notes:
* If I had to do it again, would probably use the express server for both production and build, and just use webpack middleware for the hot reloading.
* Initially started off using bootstrap as the grid system, but wasn't fitting my needs. Ended up building out my own lightweight system. It's not perfect, but it works fairly well in this case.
* Didn't use the smaller image resources, but would probably go on to utilize them for smaller screens, or on the product detail page.