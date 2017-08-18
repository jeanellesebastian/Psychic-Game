// THE RULES OF THE GAME!
// Set the # of guesses to 9
// If user choses a, b, c , d -> then user wins +1
// If user does not guess correctly -> then user losses +1
// If user does not guess correctly -> then add the letter guessed to a list
// For every guess -1 from the # of guesses
// After 9 guesses, then reset the game

    // create a list of keys / guesses available

    var psychicLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
// define variables to hold the # wins, # losses, # guesses left, and an array to hold the string of guesses made so far
    var youWin = 0;
    var youLose = 0;
    var guessesLeft = 9;
    var guessedLetters = []; //Array to capture user letter input


    document.onkeyup = function(event) {

      // what the user presses
      var yourGuess = event.key; 
      guessedLetters.push(yourGuess); 
      // stores user letter guesses

      var psychic = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];
      //If your guess matches the psychic's guess,
      //a point is added to the "Wins" tally and the guesses tally restarts.
      if (yourGuess === psychic) {
        youWin++;
        guessesLeft = 9;
      }
      //If your does not not match the psychic's guess, your number of  guesses remaining -1
      else {
        guessesLeft--;
      }
      //If the guesses remaining equals 0, you lose and +1 is added to  the losses. the points restart.
      if (guessesLeft === 0) {
        youLose++;
        guessesLeft = 9;
      }
      var html = "<p>Guess what letter I'm thinking of:</p>" +
        "<p>Wins: " + youWin + "</p>" +
        "<p>Loses: " + youLose + "</p>" +
        "<p>Guesses Remaining: " + guessesLeft + "</p>" +
        "<p>Guessed Letter: " + guessedLetters.join(', ') + "</p>" ; //Show guessed     letters heredocument.querySelector("#psychicAct").innerHTML = html;
        
        document.getElementById("results").innerHTML = html;
    }





  // if (userGuess === "a") || (userGuess === "b") || (userGuess === "c") {
  //  wins++;
  // } else {
  //  left--;
  // } if (left === 0) {
  //  losses++;
  //  left = 9;
  // }



  // document.querySelector("#game").innerHTML = html;

  // }

//    document.getElementById(wins++);
//  } else if {
//    document.getElementById(losses++);
//  }

//  document.getElementById(left--)
//  document.getElementById()
//  }
// }
