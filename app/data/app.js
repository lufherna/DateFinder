$(document).on('click', "#submitSurvey", function(e){
	
	if($('#nameID').val().trim() == ''){
		alert('You scared to enter your name?');
		return;
	} if($('#userPic').val().trim() == ''){
		alert("Don't be shy! You're just moments away from dating a hottie! But we need your pic!");
		return
	}
	
	var userArray = [];

	for (var i = 1; i < 11; i++) {

		if($('input:radio[name=q'+i+']:checked').val() == null){
			alert("Answer all the questions! We need this info");
			return;
		} else {
			
			userArray.push( $('input:radio[name=q'+ i +']:checked').val())
			//console.log(userArray);
		}
	}

	// create an object using the form data from user
	var userAnswers = {
		name: $('#nameID').val().trim(),
		image: $('#userPic').val().trim(),
		scores: userArray
	};

	$.post('/api/friends', userAnswer, function(data){

			console.log(data.name);
			console.log(data.photo);
			$('#')
	}

/*	$.post('/api/friends', userArray, function(data) {

			console.log(data.name);
	})*/

})