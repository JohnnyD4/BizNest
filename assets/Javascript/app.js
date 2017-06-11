
$(document).ready(function() {
	$("#signUp").on("click", function() {
		$(".signUpPage").css("display", "block");
		
		$(".entryPage").css("display", "none");

		// openHomePage();
	})
	
	$("#buttonSignUp").on("click", function() {
		$(".signUpPage").css("display", "none");
		
		$(".entryPage").css("display", "block");

	})	


	function openHomePage() {
		

	}
})