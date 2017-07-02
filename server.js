// dependancies
var express = require('express');
var bodyParser = require('body-parser');

// this does not require path. why though?
// var path = require('path');

// Sets up Express
// this sets up the basic properties for our express server
// ===============================

// sets an initial port. We'll use this later with our listener
var PORT = process.env.PORT || 3000;

// tells node that we are creating an express server
var app = express();

// sets up Express app to handle parsing
// BodyParser makes it easy for our server to interpret data sent to it
// standard code below.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// sets up static assets directories to pull data from (now express can grab stuff from here)
app.use(express.static('./app/public'));

// the below points our server to a series of "route" files
// these routes give our server a "map" of how to respond when users visit or request various URL
require('./app/routing/htmlRoutes.js') (app);
require('./app/routing/apiRoutes.js') (app);

// the code below 'starts' our server
app.listen(PORT, function(){

	console.log('Server listening on %d', PORT)
})