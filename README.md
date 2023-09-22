# Project-3-Rock-Paper-Scissors

## Links
- [Try the Demo here!](https://ImFantin.github.io/Rock-Paper-Scissors/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)

## About
This is a simple rock paper scissors game made with HTML, CSS and JavaScript.

The game is played against the computer and the winner is decided by who first wins 5 rounds.

I diviated from the assignment a bit and added a few features:
- The game is played in best of 5 rounds
- Added a score counter
- Added GUI elements to show the player's and computer's choice

## What I learned

```
rock.addEventListener('click', playerOptions);
paper.addEventListener('click', playerOptions);
scissors.addEventListener('click', playerOptions);

function playerOptions(e) {
  const playerSelection = e.target.className;
  playerChoice.innerHTML = `<img src="images/${playerSelection}.png" alt="${playerSelection}" style="width: 80px;">`;
  playRound(playerSelection);
}
```
- I learned how to use event listeners to get the player's choice and display it on the screen, alternating between different images.

```
const choices = ['rock', 'paper', 'scissors'];

const computerSelection = choices[Math.floor(Math.random() * choices.length)];
computerChoice.innerHTML = `<img src="images/${computerSelection}.png" alt="${computerSelection}" style="width: 80px;">`;
```
- How to create and pull information from an array dinamically changing the image displayed on the screen.

```
headerP.innerHTML = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;
```
- How to use the charAt() method to capitalize the first letter of a string added to the rest of the string using the slice() method.

```
function endGame() {
  setTimeout(function () {
    if (playerScore === winningScore) {
      alert('Good work soldier! You won the game! The world is safe for now.');
    } else {
      alert('You lost the game! The world is doomed!');
    }
  }, 100);
}
```
- How to use the setTimeout() method to delay the execution of a function was somewhat new to me.

## Screenshots

### Desktop

![](https://github.com/Fantinn/Project-3-Rock-Paper-Scissors/blob/main/ss/desktop%20version1.png)
![](https://github.com/Fantinn/Project-3-Rock-Paper-Scissors/blob/main/ss/desktop%20version2.png)

### Mobile

<div align="center">
    <img src="https://github.com/Fantinn/Project-3-Rock-Paper-Scissors/blob/main/ss/mobile%20version1.jpg" alt="mobile ss1" />
    <img src="https://github.com/Fantinn/Project-3-Rock-Paper-Scissors/blob/main/ss/mobile%20version2.jpg" alt="mobile ss2" />
</div>
