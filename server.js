var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


//-------- Mongoose Connection to Database------

mongoose.connect('mongodb://localhost/submittedArticles');

var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', function(error) {
	console.log("Mongoose Error: ", error);
});

db.once('open', function(req, res) {
	console.log('Mongoose connection successful.');
});

