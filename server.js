// ==============================
// server.js
// ==============================

// modules ----------------------
var express             = require('express');
var path                = require('path');

// Environment ------------------
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 8000;

// Express Setup ----------------
var app = express();
var router = express.Router();

// Static files -----------------
app.use(express.static(__dirname + '/build'));

// Routes -----------------------
app.get('*', function(req, res) {
	console.log('sending files');
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

// Launch app -------------------
app.listen(port);
console.log("*** server running");
exports = module.exports = app;
