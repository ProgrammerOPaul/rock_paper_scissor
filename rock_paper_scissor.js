// This is the list of possible outcomes

const choice = ["Rock","Paper", "Scissors"];

let roundWinner 

// This returns a choice for the computer
function getComputerChoice(choice){
    move = Math.floor(Math.random() * 3)
    return choice [move]
}



// This compares userinput vs computer input and returns the winner
function round(user,computer){
    if (user == "Rock" && computer == "Scissors" ){
        return roundWinner = 1
    }
    else if (user == "Rock" && computer == "Paper" ){
        return roundWinner = 0
    }
    else if (user == "Paper" && computer == "Rock" ){
        return roundWinner = 1
    }
    else if (user == "Paper" && computer == "Scissors" ){
        return roundWinner = 0
    }
    else if (user == "Scissors" && computer == "Paper" ){
        console.log("You win the round! Scissors beats Paper")
        return roundWinner = 1
    }
    else if (user == "Scissors" && computer == "Rock" ){
        console.log("You lose the round! Rock beats Scissors")
        return roundWinner = 0
    }
    else{
        return roundWinner = 2
    }
}

let userScore = 0;
let computerScore = 0;
let matches = 0;
let result = ''


const rock = document.getElementById("rock");
rock.addEventListener("click", function(){
    if(round("Rock",(getComputerChoice(choice))) == 0 ){
        computerScore += 1;
        result = 'You lose the round! Paper beats Rock';
    }
    else if (round("Rock",(getComputerChoice(choice))) == 1){
        userScore += 1;
        result = 'You win the round! Rock beats Scissors';
    }
    else if (round("Rock",(getComputerChoice(choice))) == 2){
        result = `It's a tie, you both chose Rock and get 0 points`
    }
    matches += 1;
});

const paper = document.getElementById("paper");
paper.addEventListener("click", function(){
    if(round("Paper",(getComputerChoice(choice))) == 0 ){
        computerScore += 1;
        result = 'You lose the round! Scissors beats Paper';
    }
    else if (round("Paper",(getComputerChoice(choice))) == 1){
        userScore += 1;
        result = 'You win the round! Paper beats Rock';
    }

    else if (round("Paper",(getComputerChoice(choice))) == 2){
        result = `It's a tie, you both chose Paper and get 0 points`
    }
    matches += 1;
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(){
    if(round("Scissors",(getComputerChoice(choice))) == 0 ){
        computerScore += 1;
        result = 'You lose the round! Rock beats Scissors';
    }
    else if (round("Scissors",(getComputerChoice(choice))) == 1){
        userScore += 1;
        result = 'You win the round! Scissors beats Paper';
    }

    else if (round("Paper",(getComputerChoice(choice))) == 2){
        result = `It's a tie, you both chose Scissors and get 0 points`
    }
    matches += 1;
});

const text = document.querySelector('#text');
const content = document.createElement('div');
content.classList.add('content');
content.textContent(`Player: ${userScore}     VS      Computer: ${computerScore}`);
text.appendChild(content);