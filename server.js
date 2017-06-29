// dependancies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up Express
// ===========================
var PORT = process.env.PORT || 3010;
var app = express();

// sets up Express app to handle parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// sets up static assets directories to pull data from (now express can grab stuff from here)
app.use(express.static('./app/public'));

// node js requires these files in order to route 
require('./app/routing/htmlRoutes.js') (app);
require('./app/routing/apiRoutes.js') (app);

// console logs if it is listening on the proper port
app.listen(PORT, function(){

	console.log('Server listening on %d', PORT)
})