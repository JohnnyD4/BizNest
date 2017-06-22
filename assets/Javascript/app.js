var userName;

var storedName;

var changeName;

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

		localStorage.setItem('name', userName);

		storedName = localStorage.getItem(userName);

		console.log(userName);

  		// console.log( $( userName ).serialize());

  		location.href = "profile.html";

  		

	});

	function openHomePage() {
		$("#userName").html('name');	
		console.log(userName);	

	}

	$("#hamburger").on("click", function() {
		$("#mySideNav").css("width", "250px");
	}) 

	$("#closeNavBtn").on("click", function() {
		$("#mySideNav").css("width", "0px");
	})
		
	
	$(".profileInfo").on("click", ".edit", function() {

		// $(".edit").hide();

		changeName = $("<input type='text' id='editName'>");

		$(".clientName").html(changeName);

		var saveBtn = $("<button class='btn' id='saveData'>Save Changes</button>");

		$(".editSave").html(saveBtn);

	})

	$(".profileInfo").on("click", "#saveData", function() {
		
		$(".editSave").html('<a id="editBtn" class="edit" href="#">Edit Profile</a>');


		$(".clientName").html($("<h3 id='userName'>" + changeName.val() + "</h3>"));

		$("#sideName").html(changeName.val());
	})

})