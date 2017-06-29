// load data from other places
var friends = require('../data/friends.js');
var path = require('path');

// routes
// this will display the possible super heroine matches in JSON format
// ================

module.exports = function(app) {

// API get requests

	app.get('/api/friends', function(req, res) {

		res.JSON(superHeroines);
	});

	app.post('/api/friends', function(req, res){

		console.log('req.body.name:' + req.body.name);
		console.log('req.body.scores.length:' + req.body.scores.length);

		var match = {};

		var difference;

		for (var i = 0; i < superHeroines.length; i++){

			var differenceList = [];
			var totalDifference = 0;

			for (var l = 0; l < superHeroines[i].scores.length; l++) {

				differenceList
			}
		}
	});
}

// route that takes in incoming survey results
/*app.post('/date/new', function(req, res) {

})*/