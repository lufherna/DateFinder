// dependancies
// this path package is necessary to get the correct file path for our html
var path = require('path');

// routes
// ===============
// exports these routes to be used where needed
// below code handles when users 'visit' a page
// in each of the below cases the user is shown an html page of the content
module.exports = function(app) {
	// defaults to home page if the url ends with '/'
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'))
	});

	// shows survey.html file page if the url ends with '/survey'
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'))
	});
}