$(document).on('click', "#submitSurvey", function(e){
	e.preventDefault();
	console.log('testing that this click is working')

	var userArray = [];

	for (var i = 1; i < 11; i++) {
		userArray.push( $('input:radio[name=q'+ i +']:checked').val())
		console.log(userArray);
	}

/*	$.post('/api/friends', userArray, function(data) {

			console.log(data.name);
	})*/

})