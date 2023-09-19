function getComputerChoice() {
    let x = Math.random()
    if (x <= .34) {
        return 'rock'
    } else if (x <= .67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper Beats Rock!';
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock Beats Scissors!';
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper Beats Rock!';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors Beat Paper!';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors Beat Paper!';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock Beats Scissors!';
        } else if (playerSelection === computerSelection) {
        return 'Tie!'
        };
}       

function game(n) {
    for (let i = 0; i < n; i++) {
        playRound(playerSelection, computerSelection);
    }
}

let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()
let computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
game(5)





/* switch () {
    case (PlayerSelection === 'rock' && ComputerSelection === 'paper'):
        return 'You Lose! Paper Beats Rock!';
        break;
    case (PlayerSelection === 'rock' && ComputerSelection === 'scissors'):
        return 'You Win! Rock Beats Beats!';
         break;
    case (PlayerSelection === 'paper' && ComputerSelection === 'rock'):
        return 'You Win! Paper Beats Rock!';
        break;   
    case (PlayerSelection === 'paper' && ComputerSelection === 'scissors'):
        return 'You Lose! Scissors Beat Paper!';
         break; 
    case (PlayerSelection === 'scissors' && ComputerSelection === 'paper'):
        return 'You Win! Scissors Beat Paper!';
        break;  
    case (PlayerSelection === 'scissors' && ComputerSelection === 'rock'):
        return 'You Lose! Rock Beats Scissors!';
        break;     
    case (PlayerSelection === ComputerSelection):
        return 'Tie!'
        break
    default:
} */