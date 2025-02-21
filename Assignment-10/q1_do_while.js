const randomNumber = Math.floor(Math.random() * 50) + 1;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 50:"));

    if (isNaN(guess) || guess < 1 || guess > 50) {
        alert("Invalid input! Enter a number between 1 and 50.");
    } else if (guess != randomNumber) {
        alert("Incorrect! Try again.");
    }
} while (guess !== randomNumber);

alert("Correct! You guessed the number!");
