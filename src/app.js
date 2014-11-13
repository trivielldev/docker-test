var express = require('express');

var PORT = 8080;

var app = express();

app.get('/', function(req, res) {
	res.send("Hello World!");
});

app.listen(PORT);
console.log("Application running on port " + PORT);