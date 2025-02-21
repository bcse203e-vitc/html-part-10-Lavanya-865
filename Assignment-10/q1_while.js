const randomNumber = Math.floor(Math.random() * 5) + 1; // Generate random number between 1-50
let guess = parseInt(prompt("Guess a number between 1 and 50:"));

while (guess !== randomNumber) {
    if (isNaN(guess) || guess < 1 || guess > 50) {
        guess = parseInt(prompt("Invalid input! Enter a number between 1 and 50:"));
        continue;
    }

    if (guess != randomNumber) {
        guess = parseInt(prompt("Incorrect! Try again:"));
    }
}

alert("🎉 Correct! You guessed the number!");
