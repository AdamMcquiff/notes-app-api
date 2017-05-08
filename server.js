var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;
var router = express.Router();

app.use('/api', router);

router.get('/', function(req, res) {
    res.json({ message: 'swoioi' });
});

app.listen(port);

console.log('Magic happens on port ' + port);
