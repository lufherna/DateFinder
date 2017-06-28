// load data from other places
var friends = require('../data/friends.js');
var path = require('path');

// routes
// this will display the possible super heroine matches in JSON format
// ================
app.get('/date/friends', function(req, res) {

	res.JSON(superHeroines);
})

app.post('/api/friends', function(req, res){

	console.log('req.body.name:' + req.body.name);
	console.log('req.body.scores.length:' + req.body.scores.length)
})

// route that takes in incoming survey results
/*app.post('/date/new', function(req, res) {

})*/