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

function playRound(PlayerSelection, ComputerSelection) {
    switch () {
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
    }
}
console.log(playRound('rock', 'paper'))