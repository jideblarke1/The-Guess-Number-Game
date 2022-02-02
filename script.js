'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function game() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').innerHTML =
      '⚠️ Kindly enter a valid number. ';

    //when guess is correct
  } else if (guess === randomNum) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = randomNum;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when guess is wrong
  else if (guess !== randomNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNum
          ? '🤪 oops! Try a lower Number'
          : '🤪 oops! Try a Higher Number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'oops! ❌ Game Over!';
      score = 0;
    }
  }
  // // when guess is too high
  // else if (guess > randomNum) {
  //   if (score >= 1) {
  //     document.querySelector('.message').textContent =
  //       '🤪 oops! Try a lower Number';
  //     score--;å
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'oops! ❌ Game Over!';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highScore = 0;

  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
