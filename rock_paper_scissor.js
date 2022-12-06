// This is the list of possible outcomes
const choice = ["Rock","Paper", "Scissors"];


// This returns a choice for the computer
function getComputerChoice(choice){
    move = Math.floor(Math.random() * 3)
    return choice [move]
}

console.log(getComputerChoice(choice))