const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const playerScoreDisplay = document.querySelector('.player .score');
const computerScoreDisplay = document.querySelector('.computer .score');
const reset = document.querySelector('.reset');

const headerP = document.querySelector('.headerP');
const result = document.querySelector('.result');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let playerScore = 0;
let computerScore = 0;
const winningScore = 5;
const choices = ['rock', 'paper', 'scissors'];
let gameOver = false;

rock.addEventListener('click', playerOptions);
paper.addEventListener('click', playerOptions);
scissors.addEventListener('click', playerOptions);

reset.addEventListener('click', resetGame);

function playerOptions(e) {
  if (gameOver) return;
  
  const playerSelection = e.target.className;
  playerChoice.innerHTML = `<img src="images/${playerSelection}.png" alt="${playerSelection}" style="width: 80px;">`;
  playRound(playerSelection);
}

function playRound(playerSelection) {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  computerChoice.innerHTML = `<img src="images/${computerSelection}.png" alt="${computerSelection}" style="width: 80px;">`;
  
  if (playerSelection === computerSelection) {
    headerP.innerHTML = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties with ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;
    result.innerHTML = `It's a Tie!`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    headerP.innerHTML = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;
    result.innerHTML = 'You Win!';
  } else {
    computerScore++;
    headerP.innerHTML = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} is beaten by ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;
    result.innerHTML = 'You Lose!';
  }   
  playerScoreDisplay.innerHTML = `Player:${playerScore}`;
  computerScoreDisplay.innerHTML = `Computer:${computerScore}`;    
  if (playerScore === winningScore || computerScore === winningScore) {
    endGame();
  }
}

function endGame() {
  gameOver = true;
  setTimeout(function () {
    if (playerScore === winningScore) {
      alert('Good work soldier! You won the game! The world is safe for now.');
    } else {
      alert('You lost the game! The world is doomed!');
    }
  }, 100);
}

function resetGame() {
  gameOver = false;
  playerScore = 0;
  computerScore = 0;
  playerChoice.innerHTML = '?';
  computerChoice.innerHTML = '?';
  headerP.innerHTML = 'This is a best of 5 game, the World is couting with you!';
  result.innerHTML = 'Choose your Weapon';
  playerScoreDisplay.innerHTML = `Player:${playerScore}`;
  computerScoreDisplay.innerHTML = `Computer:${computerScore}`;
}