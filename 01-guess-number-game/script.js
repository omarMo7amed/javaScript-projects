'use strict';

let numberSecret = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = -1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//button check
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number...';
    displayMessage('No Number...');
  } else if (guess === numberSecret) {
    // document.querySelector('.message').textContent = 'Guess Correct...';
    displayMessage('Guess Correct...');
    document.querySelector('.number').textContent = numberSecret;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  } else if (numberSecret !== guess) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > numberSecret ? 'Too High...' : 'Too Low';
      displayMessage(guess > numberSecret ? 'Too High...' : 'Too Low');
      document.querySelector('.score').textContent = --score;
    } else {
      // document.querySelector('.message').textContent = 'You lose...';
      displayMessage('You lose...');
    }
  }
});

//button again
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  numberSecret = Number(Math.trunc(Math.random() * 20) + 1);
  document.querySelector('.number').textContent = '?';
});
