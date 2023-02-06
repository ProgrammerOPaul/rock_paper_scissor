let result = '';
let userScore = 0;
let computerScore = 0;
let score =  `Player: ${userScore}     VS      Computer: ${computerScore}`;
const text = document.querySelector("#text");
const content = document.createElement('div');
content.classList.add('content');
content.textContent = score;
text.appendChild(content);

// This returns a choice for the computer
function getComputerChoice(){
    const choice = ["Rock","Paper", "Scissors"];
    move = Math.floor(Math.random() * 3)
    return choice [move]
}


// This compares user input vs computer input and returns the winner
function round(user,computer){
    if (user == "Rock" && computer == "Scissors" ){
        userScore += 1;
        console.log("You win the round! Rock beats Scissors");
    }

    else if (user == "Rock" && computer == "Paper" ){
        computerScore += 1;
        console.log("You lose the round! Paper beats Rock");
    }

    else if (user == "Paper" && computer == "Rock" ){
        userScore += 1;
        console.log("You win the round! Paper beats Rock");
    }

    else if (user == "Paper" && computer == "Scissors" ){
        computerScore += 1;
        console.log("You lose the round! Scissors beats Paper")
    }

    else if (user == "Scissors" && computer == "Paper" ){
        userScore += 1;
        console.log("You win the round! Scissors beats Paper");
    }
    else if (user == "Scissors" && computer == "Rock" ){
        computerScore += 1;
        console.log("You lose the round! Rock beats Scissors")
    }

    else if (user == computer) {
        console.log (`It's a tie!, you both chose ${user}`);
    }
    score =  `Player: ${userScore}     VS      Computer: ${computerScore}`;
    content.textContent = score;
}


document.getElementById("scissors").addEventListener("click",function(){
    round("Scissors", getComputerChoice());
});

document.getElementById("paper").addEventListener("click",function(){
    round("Paper", getComputerChoice());
    console.log(score);
});

document.getElementById("rock").addEventListener("click",function(){
    round("Rock", getComputerChoice());
});

