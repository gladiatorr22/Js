let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); 
const lowOrHi = document.querySelector('.lowOrHi');
const remaining = document.querySelector('.lastResult'); 
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Your guess cannot be less than 1.');
  } else if (guess > 100) {
    alert('Your guess cannot be greater than 100.');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The correct number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right! Congratulations! 🎉`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The number is too low!`);
  } else {
    displayMessage(`The number is too high!`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<p>${message}</p>`;
}

function endGame() {
  playGame = false;
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start new game</h2>`;
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    playGame = true;
    userInput.removeAttribute('disabled');
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    startOver.removeChild(p);
  });
}