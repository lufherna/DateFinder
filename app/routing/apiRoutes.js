// load data from other places
var friends = require('../data/friends.js');
var path = require('path');

// routes
// this will display the possible friends matches in JSON format
// ================
app.get('/date/:matches?', function(req, res) {
	var datePerson = req.params.matches;

	if (datePerson) {
		console.log(datePerson);

		for (var i = 0; i < matches.length; i++) {
			if (datePerson === matches[i].name) {
				return res.json(matches[i]);
			}
		  }
		return res.json(false);
	   }
	return res.json(matches);
})

// route that takes in incoming survey results
app.post('/date/new', function(req, res) {

})