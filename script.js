'use strict';
let numberR;
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const highscore = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');
guess.focus();
let nScore = 20;
const score = document.querySelector('.score');
function numberRR() {
  numberR = Math.floor(Math.random() * 20) + 1;
}
numberRR();
let nHighScore = 0;
let nHighLocalScore = 0;
console.log(numberR);
btnAgain.addEventListener('click', e => {
  e.preventDefault();
  numberRR();
  nScore = 20;
  console.log(numberR);
  score.textContent = nScore;
  if (nHighLocalScore > nHighScore) {
    nHighScore = nHighLocalScore;
    highscore.textContent = nHighScore;
    console.log(nHighScore);
    body.style.backgroundColor = '#222';
    number.textContent = '?';
    guess.value = '';
  }
});

check.addEventListener('click', e => {
  e.preventDefault();
  console.log(numberR);
  if (guess.value == numberR) {
    message.textContent = 'you guessed right🥳';
    number.textContent = numberR;
    // highscore.textContent = guess.value;
    console.log('togri');
    body.style.backgroundColor = 'green';
    nHighLocalScore = nScore;
  } else if (guess.value > numberR) {
    nScore--;
    console.log(nScore);
    score.textContent = nScore;
    console.log('too high');
    message.textContent = 'too high';
    // number.textContent = numberR;
    // highscore.textContent = guess.value;
    body.style.backgroundColor = 'none';
  } else if (guess.value < numberR) {
    console.log(nScore);
    console.log('too low');
    message.textContent = 'too low';
    nScore--;
    score.textContent = nScore;
    // number.textContent = numberR;
    // highscore.textContent = guess.value;
    // body.style.backgroundColor = 'red';
  }
});
