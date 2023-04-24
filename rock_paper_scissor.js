let resultCount = "";
let userScore = 0;
let computerScore = 0;
let score = `Player: ${userScore}     VS      Computer: ${computerScore}`;
const text = document.querySelector("#text");

const result = document.createElement("p");
result.classList.add("result");
result.textContent = resultCount;
text.appendChild(result);

const content = document.createElement("p");
content.classList.add("content");
content.textContent = score;
text.appendChild(content);

const anotherRound = document.createElement("button");
anotherRound.setAttribute("id", "again");
anotherRound.textContent = "reset";

// This returns a choice for the computer
function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const move = Math.floor(Math.random() * 3);
  return choice[move];
}

function reset() {
  resultCount = "";
  userScore = 0;
  computerScore = 0;
  score = `Player: ${userScore}     VS      Computer: ${computerScore}`;
  content.textContent = score;
  result.textContent = resultCount;
  text.removeChild(anotherRound);
}

// This compares user input vs computer input and returns the winner
function round(user, computer) {
  if (userScore === 5 || computerScore === 5) {
    return;
  }

  if (user === "Rock" && computer === "Scissors") {
    userScore += 1;
    resultCount = "You win the round! Rock beats Scissors";
  } else if (user === "Rock" && computer === "Paper") {
    computerScore += 1;
    resultCount = "You lose the round! Paper beats Rock";
  } else if (user === "Paper" && computer === "Rock") {
    userScore += 1;
    resultCount = "You win the round! Paper beats Rock";
  } else if (user === "Paper" && computer === "Scissors") {
    computerScore += 1;
    resultCount = "You lose the round! Scissors beats Paper";
  } else if (user === "Scissors" && computer === "Paper") {
    userScore += 1;
    resultCount = "You win the round! Scissors beats Paper";
  } else if (user === "Scissors" && computer === "Rock") {
    computerScore += 1;
    resultCount = "You lose the round! Rock beats Scissors";
  } else if (user === computer) {
    resultCount = `It's a tie!, you both chose ${user}`;
  }

  if (userScore === 5 || computerScore === 5) {
    if (userScore > computerScore) {
      score = `Congratulations, you won the game with a score of 
            ${userScore} against ${computerScore}; if you want to play 
            more rounds press the reset button.`;
    } else {
      score = `Unfortunately, you lost the game with a score of 
            ${userScore} against ${computerScore}; if you want to play 
            more rounds press the reset button.`;
    }
    content.textContent = score;
    result.textContent = resultCount;
    text.appendChild(anotherRound);
    document.getElementById("again").addEventListener("click", () => {
      reset();
    });
    return;
  }

  score = `Player: ${userScore}     VS      Computer: ${computerScore}`;
  content.textContent = score;
  result.textContent = resultCount;
}

document.getElementById("scissors").addEventListener("click", () => {
  round("Scissors", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
  round("Paper", getComputerChoice());
});

document.getElementById("rock").addEventListener("click", () => {
  round("Rock", getComputerChoice());
});
