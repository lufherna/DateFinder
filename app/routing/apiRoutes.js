// load data from other places
var friends = require('../data/friends.js');
var path = require('path');

// routes
// this will display the possible super heroine matches in JSON format
// ================

module.exports = function(app) {

// API get requests

	app.get("/api/friends", function(req, res) {

		res.json(friends);
	});

//	API Requests

	app.post("/api/friends", function(req, res){

		console.log('req.body.name:' + req.body.name);
		console.log('req.body.scores.length:' + req.body.scores.length);

		var match = {};

		var difference = 100;

		for (var i = 0; i < friends.length; i++){

			var differenceList = [];
			var totalDifference = 0;

			for (var k = 0; k < friends[i].scores.length; k++) {

				differenceList.push(Math.abs(req.body.scores[k] - friends[i].scores[i]))
			}

			console.log(differenceList);

			for (var u = 0; u < differenceList.length; u++){

				totalDifference += differenceList[u];

			}

			console.log(totalDifference);

			if (match == {}) {

				match = friends[i];
				difference = totalDifference; 

			} else if (totalDifference < difference) {

				match = friends[i];
				difference = totalDifference;
			}

			console.log(difference)

			}

			console.log("You'll be happy to date: " + match.name)

			friends.push(req.body);
			res.json(match);
	});
}

// route that takes in incoming survey results
/*app.post('/date/new', function(req, res) {

})*/