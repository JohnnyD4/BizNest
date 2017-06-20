var userName;

var storedName;

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

		var verifyPass = $("#verifyPassword").val();

		userName = userFirst + " " + userLast;

		storedName = localStorage.setItem('name', userName);

		

		console.log(userName);

  		// console.log( $( userName ).serialize());

  		location.href = "profile.html";

  		$("profile.html#userName").html(userName)

	});

	function openHomePage() {
		$("#userName").html(userName);	
		console.log(userName);	

	}
})