let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, compGuess, targetNum) => {
  const difUser1 = Math.abs(targetNum - userGuess);
  const difUser2 = Math.abs(targetNum - compGuess);
  if (difUser1 <= difUser2) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}