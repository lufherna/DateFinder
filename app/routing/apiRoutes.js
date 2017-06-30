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

	/*	console.log('req.body.name:' + req.body.name);
		console.log('req.body.scores.length:' + req.body.scores.length);*/

	// grabs the users information in json format
		var newFriend = req.body;
		
	// grabs the users score
		var newFriendTotal = 0;

	// loops through the users scores since it is now in friends.js
		for (var i = 0; i < newFriend.scores.length; i++){

			// converts the users scores into integers to be used later
				newFriendTotal += parseInt(newFriend.scores[i])
			}

			var minDiff = 500;

			var minMatch = 0;

			// loops through superHeroines array
				for(var i = 0; i < friends.length; i++) {

					// subtracts users score 
					var difference = newFriendTotal - parseInt(friends[i].scores);

					 //differenceArray.push( Math.abs( req.body.scores[j] - friends[i].scores[j] ) )

					if(difference < 0) difference *= -1;

					if(difference < minDiff){
							minMatch = i;
							minDiff = difference
					}
				}

			var matchFriend = friends[minMatch];


			console.log('Match', matchFriend);
			console.log("You'll be happy to date: " + match.name)

			friends.push(newFriend);
			res.json(friends[minMatch]);
	});
}

// route that takes in incoming survey results
/*app.post('/date/new', function(req, res) {

})*/