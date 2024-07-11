'use strict';

//selecting Elements
const img = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const again = document.querySelector('.btn--new');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
let cr = 0;
let activePlayer = 0;
let score = [0, 0];
//We define playing to work as boolean
let playing = 1;

//Switch Player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  //toggle switch if 0  then convert to 1 vica versa
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  cr = 0;
};

//Rolling dice functionality
roll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    img.src = `images/dice-${dice}.png`;
    img.classList.remove('hidden');

    //Checked roll 1
    if (dice === 1) {
      switchPlayer();
    }

    //Switch Player
    else if (dice !== 1) {
      cr += dice;
      document.getElementById(`current--${activePlayer}`).textContent = cr;
    }
  }
});

//Holding The Score
hold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += cr;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      playing = 0;
      img.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.score--${activePlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
  }
});

//Again?
again.addEventListener('click', function () {
  player1.classList.add('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player2.classList.remove('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  current2.textContent = 0;
  score1.textContent = score2.textContent = 0;
  score = [0, 0];
  cr = 0;
  playing = 1;
  activePlayer = 0;
});
