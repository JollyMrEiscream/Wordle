// List of possible words (you can add more words to this array)
const words = ['apple', 'grape', 'melon', 'berry', 'lemon'];

// Randomly select a word each time the page loads
let randomWord = words[Math.floor(Math.random() * words.length)];

// Set up the game board
const gameBoard = document.getElementById('game-board');
for (let i = 0; i < 5; i++) {
    const cell = document.createElement('div');
    gameBoard.appendChild(cell);
}

// Handle the guess submission
document.getElementById('submit-button').addEventListener('click', () => {
    const guess = document.getElementById('guess-input').value.toLowerCase();
    const message = document.getElementById('message');
    const cells = gameBoard.children;

    // Check if the guess is 5 characters
    if (guess.length !== 5) {
        message.textContent = 'Please enter a 5-letter word!';
        return;
    }

    // Compare guess with the random word
    for (let i = 0; i < 5; i++) {
        cells[i].textContent = guess[i];

        if (guess[i] === randomWord[i]) {
            cells[i].classList.add('correct');
        } else if (randomWord.includes(guess[i])) {
            cells[i].classList.add('present');
        } else {
            cells[i].classList.add('absent');
        }
    }

    // Check if the player guessed the word
    if (guess === randomWord) {
        message.textContent = 'Congratulations! You guessed the word!';
    } else {
        message.textContent = 'Try again!';
    }
});
