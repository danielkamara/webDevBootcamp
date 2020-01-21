// Create secret number
var secretNumber = 4;

// Ask user to guess
var stringGuess = (prompt ("Guess a number"));
var guess = Number(stringGuess);


// Check if guess is right

if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}

// Otherwise Check if guess is higher

else if(guess > secretNumber) {
alert("Too high. Guess again!")
}

// Otherwise check if lower
else {
    alert("Too Low. Guess Again!")
}


