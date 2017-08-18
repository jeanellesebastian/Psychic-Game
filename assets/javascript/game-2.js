// THE RULES OF THE GAME!
// Set the # of guesses to 9
// If user choses a, b, c , d -> then user wins +1
// If user does not guess correctly -> then user losses +1
// If user does not guess correctly -> then add the letter guessed to a list
// For every guess -1 from the # of guesses
// After 9 guesses, then reset the game



// create an array of the key guesses available ...
var psychicLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// define variables to hold the # wins, # losses, # guesses left, and an array to hold the string of guesses made so far
var wins = 0;
var loss = 0;
var left = 9;
var guessedLetters = []; // captures user letter guess


// create a function to run when a user presses a key
document.onkeyup = function(event) {

	// determines which key the user presses
	var userGuess = event.key;
	guessedLetters.push(userGuess); // store user letter guesses

	var psychic = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];
	

	// determine whether or not the user chose an option from the options array


 if (yourGuess === psychicAns) {
        win++;
        left = 8;
      }
      //If your does not not match the psychic's guess, your number of  guesses  remaining are deducted.
      else {
        left--;
      }
      //If the guesses remaining equals 0, you lose, an increment is added to  the "Losses" tally and the points restart.
      if (left === 0) {
        loss++;
        left = 8;
      }
      var html = "<p>Guess what letter I'm thinking of:</p>" +
        "<p>Wins: " + win + "</p>" +
        "<p>Loses: " + loss + "</p>" +
        "<p>Guesses Remaining: " + left + "</p>" +
        "<p>Guessed Letter: " + guessedLetters.join(', ') + "</p>" ; //Show guessed     letters heredocument.querySelector("#psychicAct").innerHTML = html;
        
        document.getElementById("game").innerHTML = html;
    }

	// if (userGuess === "a") || (userGuess === "b") || (userGuess === "c") {
	// 	wins++;
	// } else {
	// 	left--;
	// } if (left === 0) {
	// 	losses++;
	// 	left = 9;
	// }



	// document.querySelector("#game").innerHTML = html;

	// }

// 		document.getElementById(wins++);
// 	} else if {
// 		document.getElementById(losses++);
// 	}

// 	document.getElementById(left--)
// 	document.getElementById()
// 	}
// }



