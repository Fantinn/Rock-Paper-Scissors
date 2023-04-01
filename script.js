const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const playerScoreDisplay = document.querySelector('.player .score');
const computerScoreDisplay = document.querySelector('.computer .score');

const headerP = document.querySelector('.headerP');
const options = document.querySelectorAll('.options');
const result = document.querySelector('.result');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let playerScore = 0;
let computerScore = 0;
const winningScore = 5;
const choices = ['rock', 'paper', 'scissors'];

rock.addEventListener("click", playerOptions);
paper.addEventListener("click", playerOptions);
scissors.addEventListener("click", playerOptions);

function playerOptions(e) {

}

function playRound() {
  
}

function endGame() {
  let winner;
  if (playerScore > computerScore) {
    winner = 'Player';
  } else {
    winner = 'Computer';
  }
  alert(`${winner} wins the game!`);
}
