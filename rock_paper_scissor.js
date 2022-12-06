// This is the list of possible outcomes

const choice = ["Rock","Paper", "Scissors"];

let roundWinner 

// This is the user input
function userChoice(choice) {
    let input = prompt("Type 0 for Rock, 1 for Paper and 2 for Scissors")
    let user
    return user = choice[input]
}

// This returns a choice for the computer
function getComputerChoice(choice){
    move = Math.floor(Math.random() * 3)
    return choice [move]
}



// This compares userinput vs computer input and returns the winner
function round(user,computer){
    if (user == "Rock" && computer == "Scissors" ){
        console.log("You win the round! Rock beats Scissors")
        return roundWinner = 1
    }
    else if (user == "Rock" && computer == "Paper" ){
        console.log("You lose the round! Paper beats Rock")
        return roundWinner = 0
    }
    else if (user == "Paper" && computer == "Rock" ){
        console.log("You win the round! Paper beats Rock")
        return roundWinner = 1
    }
    else if (user == "Paper" && computer == "Scissors" ){
        console.log("You lose the round! Scissors beats Paper")
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
        console.log(`It's a tie, you both chose ${user} and get 0 points`)
        return roundWinner = 2
    }
}

function game(){
    let userScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i ++) {
        round(userChoice(choice),getComputerChoice(choice))
        if (roundWinner == 1){
            userScore ++
        }
        else if (roundWinner == 0){
            computerScore ++
        }
        console.log(`The score is: You with ${userScore} points VS computer with ${computerScore} points`)
    }
    console.log("Rounds are over, time to check final score!")
    if (userScore > computerScore) {
        return console.log (`You won with ${userScore} points against computer with ${computerScore} points`)
    }
    else if (userScore < computerScore) {
        return console.log (`Computer won with ${computerScore} points against you with ${userScore} points`)
    }
    else {
        return console.log (`You both tie with ${computerScore} points`)
    }
}


game()
