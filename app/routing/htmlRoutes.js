// dependancies
var path = require('path');

// routes
// ===============
// exports these routes to be used where needed
module.exports = function() {
	// defaults to home page if the url ends with '/'
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'))
	});

	// shows survey.html file page if the url ends with '/survey'
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'))
	});
}