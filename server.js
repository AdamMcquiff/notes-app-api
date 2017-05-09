var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config();

var Note = require('./app/models/note');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3300;
var router = express.Router();

mongoose.connect(process.env.DB_CONNECTION); // connect to our database

app.use('/api', router);

router.get('/', function(req, res) {
    res.json({ message: process.env.DB_CONNECTION });
});

app.listen(port);

console.log('Magic happens on port ' + port);
