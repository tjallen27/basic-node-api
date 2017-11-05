const express = require('express');
const bodyParser = require('bodyParser');
var app = express();

app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res){
  res.json({ message: 'Welcome to the API!'});
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port' + port);
