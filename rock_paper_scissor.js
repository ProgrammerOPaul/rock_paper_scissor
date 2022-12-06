// This is the list of possible outcomes

const choice = ["Rock","Paper", "Scissors"];

// This is the user input
let input = prompt("Type 0 for Rock, 1 for Paper and 2 for Scissors");
let userChoice = choice[input]

console.log(userChoice);


// This returns a choice for the computer
function getComputerChoice(choice){
    move = Math.floor(Math.random() * 3)
    return choice [move]
}

console.log(getComputerChoice(choice))

function round(user,computer){
    if (user == "Rock" && computer == "Scissors" ){
        console.log("You win! Rock beats Scissors")
    }
    else if (user == "Rock" && computer == "Paper" ){
        console.log("You lose! Paper beats Rock")
    }
    else if (user == "Paper" && computer == "Rock" ){
        console.log("You win! Paper beats Rock")
    }
    else if (user == "Paper" && computer == "Scissors" ){
        console.log("You lose! Scissors beats Paper")
    }
    else if (user == "Scissors" && computer == "Paper" ){
        console.log("You win! Scissors beats Paper")
    }
    else if (user == "Scissors" && computer == "Rock" ){
        console.log("You lose! Rock beats Scissors")
    }
    else{
        console.log(`It's a tie, you both chose ${user}`)
    }
}

round (userChoice,getComputerChoice(choice))
