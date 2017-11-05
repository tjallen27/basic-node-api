const express = require('express');
const bodyParser = require('body-parser');
var app = express();

// BodyParser allows us to get the data from a Post
app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.json());

// Sets the port address
var port = process.env.PORT || 8080;
var router = express.Router();

// Sets the routes for the API
router.get('/', function(req, res){
  res.json({ message: 'Welcome to the API!'});
});

// States to use the '/api' prefix for all router calls
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Magic happens on port' + port);
