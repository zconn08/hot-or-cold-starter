$(document).ready(function(){
	
	var correctAnswer;
	var guess;
	var counter;

	var generateNumber = function(){
		correctAnswer =  Math.floor((Math.random()*100+1));
		console.log("The random number is " + correctAnswer);
		return generateNumber;
	};

	var newGame = function(){
	//add here - clear guesses, reset counter
		generateNumber();
		counter = 0;
		$("#count").text(0);
		$("#guessList").empty();
		$("#feedback").text("Make your Guess!");
		$("#userGuess").val("");
	};

	var retrieveGuess = function(){
		guess = $("#userGuess").val();
		console.log(guess);
	};

	var provideFeedback = function(){
		if (guess%1 !== 0) {
			alert("Please enter an integer between 1 and 100!");
		}
		else {
			if (guess == correctAnswer) {
			console.log("Correct!");
			$("#feedback").text("Correct!");
		}
		else if(Math.abs(guess - correctAnswer) < 5){
			console.log("On Fire!");
			$("#feedback").text("On Fire!");
		}
		else if(Math.abs(guess - correctAnswer) < 10){
			console.log("Very Hot");
			$("#feedback").text("Very Hot");
		}
		else if(Math.abs(guess - correctAnswer) < 20){
			console.log("Hot");
			$("#feedback").text("Hot");
		}
		else if(Math.abs(guess - correctAnswer) < 30){
			console.log("Warm");
			$("#feedback").text("Warm");
		}
		else if(Math.abs(guess - correctAnswer) < 40){
			console.log("Cold");
			$("#feedback").text("Cold");
		}
		else{
			console.log("Ice Cold");
			$("#feedback").text("Ice Cold");
		}
		}

		
	};

	var addGuess = function(){
		if (guess%1 !== 0 || isNaN(guess)) {
		}
		else{
			$("#guessList").append("<li>" + guess + "</li>");
		}
	};

	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
	$(".overlay").fadeOut(1000);
	});

	//Retrieve guess and provide feedback
	$("#guessButton").click(function(){
		retrieveGuess();
		provideFeedback();
		addGuess();
		trackGuess();
	});
	
	//In
	var trackGuess = function(){
		if (guess%1 !== 0) {
		}
		else{

		counter += 1;
		$("#count").text(counter);
		}
	};

	//Start game upon page load
	newGame();

	//Start game upon clicking on new game
	$(".new").click(function(){
		newGame();
	});
});


