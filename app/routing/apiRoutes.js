// load data from other places
// linking our routes to a series of 'data' sources
// these sources hold arrays of info on all possible friends
var friends = require('../data/friends.js');

// routes
// this will display the possible super heroine matches in JSON format
// ================

module.exports = function(app) {

// API get requests
// code below handles when users 'visit' a page
// in each of the below cases when a user visits a link
// (ex. localhost:PORT/api/admin..they are shown a JSON of the data in the table)

	app.get("/api/friends", function(req, res) {

		res.json(friends);
	});

//	API post Requests
// below code handles when a user submits a form and thus submits data to the server
// in each case below, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JS array

	app.post("/api/friends", function(req, res){

		// this code means that our 'server' will respond to a users survey results
		// then compare those results against every user in the database
		// it will then calculate the difference between each of the numbers and the users numbers
		// then choose the user with the least differences as the 'best date match'
		// in the case of multiple users with the same result it will choose the first match
		// after the test, it will push the user to the database

		// we will use this object to hold the 'best match'. we will update it as we
		// loop through all of the options
		var bestMatch = {
			name: '',
			photo: '',
			friendDifference: 1000
		};
		// here we take the result ot the user survey POST and parse it (JSON format)	
		var newFriend = req.body;
		// grabs the users score
		var newFriendScore = newFriend.scores;

		// this variable will calculate the difference between the user scores and the scores
		//of each in the database (friends.js file)
		var totalDifference = 0;

		// here we loop through all the friend possibilities in the database
		for (var i = 0; i < friends.length; i++){

			totalDifference = 0;

			// we then loop through all the socres of each friend
			for (var j = 0; j < friends[i].scores[j]; j++) {

				// we calculate the difference between the scores 
				// and sum them into the the totalDifference
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
			// if the sum of differences is less than the differences of the current 'best match' 
			if (totalDifference <= bestMatch.friendDifference) {

				// Reset the bestMatch to be the new friend.
				bestMatch.name = friends[i].name;
				bestMatch.photo = friends[i].photo;
				bestMatch.friendDifference = totalDifference;
			}
		}
	}

			// finally save the users data to the database(friends.js)
			// this has to happen after the check otherwise the database
			// will always return that the user is the user's best friend

			friends.push(newFriend);

			// return a JSON with users bestMatch. this will be used by the HTML
			// in the next page
			res.json(bestMatch);
	});
}

