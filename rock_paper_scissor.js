// This is the list of possible outcomes

let input = prompt("Type 0 for Rock, 1 for Paper and 2 for Scissors");

console.log(choice[input]);

const choice = ["Rock","Paper", "Scissors"];


// This returns a choice for the computer
function getComputerChoice(choice){
    move = Math.floor(Math.random() * 3)
    return choice [move]
}
