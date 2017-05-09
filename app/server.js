var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Note = require('./app/models/note');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3300;
var router = express.Router();

mongoose.connect('mongodb://127.0.0.1:27017'); // connect to our database

app.use('/api', router);

router.get('/', function(req, res) {
    res.json({ message: 'swoioi' });
});

app.listen(port);

console.log('Magic happens on port ' + port);
