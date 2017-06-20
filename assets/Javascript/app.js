
$(document).ready(function() {

	$("#entrySignUp").on("click", function() {
	
		$(".signUpPage").css("display", "block");
		
		$(".entryPage").css("display", "none");

		// openHomePage();
	})
	
	// $("#buttonSignUp").on("click", function() {
	// 	$(".signUpPage").css("display", "block");
		
	// 	$(".entryPage").css("display", "none");

	// 	var userFirst = $("#firstName").val;

	// 	var userLast = $("#lastName").val;

	// 	// var userEmail = $("#emailAddress").val;

	// 	// var userPass = $("#password").val;

	// 	console.log(userFirst, " + ", userLast);

	// })	

	$( "form" ).on( "submit", function(event) {
  		event.preventDefault();

  		var userFirst = $("#firstName").val();

		var userLast = $("#lastName").val();

		var userEmail = $("#emailAddress").val();

		var userPass = $("#password").val();

		console.log(userFirst, " + ", userLast);

  		console.log( $( this ).serialize(userFirst) );

	});

	function openHomePage() {
		

	}
})