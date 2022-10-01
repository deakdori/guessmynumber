'use strict';

// Random Secret Number
let secretNumber = Math.trunc(Math.random()*20) + 1;

// Score Counter
let score = 20;

// High Score
let highscore = 0;

// Message Display
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Check Button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no number
    if (!guess) {
        displayMessage("No number! ✖");
    
    // When player wins
    } else if (guess === secretNumber) {
        displayMessage("Correct number! ✔");
        document.querySelector('.number').style.backgroundColor = '#89f16a';
        document.querySelector('.guess').style.borderColor = '#89f16a';
        document.querySelector('.guess').style.color = '#89f16a';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too high... ↑" : "Too low... ↓")
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("YOU LOST!");
            document.querySelector('.score').textContent = 0;
        }
    }
})

// Again Button
document.querySelector('.again').addEventListener('click', function() {

    // Restore Score and Number
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    // Reset Colors and Text
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.backgroundColor = '#fff';
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').style.borderColor = '#b6b6b6';
    document.querySelector('.guess').style.color = '#58edff';
})