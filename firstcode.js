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

function game() {
    for (a = 0, b = 0; a < 3 && b < 3; a, b) {
        let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if (playerSelection === computerSelection) {
            a = a;
            b = b;
        } else if ((playerSelection === 'rock' && computerSelection === 'scissors') 
        || (playerSelection === 'paper' && computerSelection === 'rock') 
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            a += 1;
        } else if ((playerSelection === 'rock' && computerSelection === 'paper')
            || (playerSelection === 'paper' && computerSelection === 'scissors') 
            || (playerSelection === 'scissors' && computerSelection === 'rock')) {
                b += 1;
            } else if(playerSelection == null) {
                console.log('You dont want to play?')
            } else {
                console.log('incorrect value, try again.')
            };
            console.log('PS score =' + '' + a);
            console.log('CS score =' + '' + b);
        
    }
}
let a;
let b;
let playerSelection;
let computerSelection;
game()