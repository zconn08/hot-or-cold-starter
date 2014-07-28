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
	};

	var retrieveGuess = function(){
		guess = $("#userGuess").val();
		console.log(guess);
	};

	var provideFeedback = function(){
		if (guess === correctAnswer) {
			console.log("Correct");
		}
		else if(guess - correctAnswer < 10){
			console.log("Very Hot");
		}
		else if(guess - correctAnswer < 20){
			console.log("Hot");
		}
		else if(guess - correctAnswer < 30){
			console.log("Warm");
		}
		else if(guess - correctAnswer < 40){
			console.log("Cold");
		}
		else{
			console.log("Ice Cold");
		}
	};

	var addGuess = function(){
		$(".guessList").append("<li>" + guess + "<li>");
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
	});
	//Start game upon page load
	newGame();

	//Start game upon clicking on new game
	$(".new").click(function(){
		newGame();
	});
});


