const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const text = document.querySelector('.text')
const text2 = document.querySelector('.text2')
const body = document.querySelector('body')
let a = 0
    let b = 0


 btn1.addEventListener('click', (playerSelection, computerSelection) => {
    playerSelection = 'rock'
    computerSelection = getComputerChoice()
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        text.textContent = 'You Lose! Paper Beats Rock!';
            } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                text.textContent = 'You Win! Rock Beats Scissors!';
            } else if (playerSelection === computerSelection) {
                text.textContent = 'Tie!'
            };
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
    }
    text2.textContent = `Your Score: ${a} \n\nComputer Score: ${b}`
    if (a === 3) {
        text2.textContent = 'GAME OVER     YOU WIN!!'
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        let reset = document.createElement('button')
        reset.setAttribute('id', 'reset')
        reset.textContent = 'Play Again'
        body.appendChild(reset)
        reset.onclick = () => location.reload()
    } else if (b === 3) {
        text2.textContent = 'GAME OVER     YOU LOSE!!'
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        let reset = document.createElement('button')
        reset.setAttribute('id', 'reset')
        reset.textContent = 'Play Again'
        body.appendChild(reset)
        reset.onclick = () => location.reload()
    }
 })
 btn2.addEventListener('click', (playerSelection, computerSelection) => {
    playerSelection = 'paper'
    computerSelection = getComputerChoice()
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        text.textContent = 'You Win! Paper Beats Rock!';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        text.textContent = 'You Lose! Scissors Beat Paper!';
        } else if (playerSelection === computerSelection) {
        text.textContent = 'Tie!'
        };
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
    }
    text2.textContent = `Your Score: ${a} \n\nComputer Score: ${b}`
    if (a === 3) {
        text2.textContent = 'GAME OVER     YOU WIN!!'
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        let reset = document.createElement('button')
        reset.setAttribute('id', 'reset')
        reset.textContent = 'Play Again'
        body.appendChild(reset)
        reset.onclick = () => location.reload()
    } else if (b === 3) {
        text2.textContent = 'GAME OVER     YOU LOSE!!'
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        let reset = document.createElement('button')
        reset.setAttribute('id', 'reset')
        reset.textContent = 'Play Again'
        body.appendChild(reset)
        reset.onclick = () => location.reload()
    }
 })

 btn3.addEventListener('click', (playerSelection, computerSelection) => {
    playerSelection = 'scissors'
    computerSelection = getComputerChoice()
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        text.textContent = 'You Win! Scissors Beat Paper!';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        text.textContent = 'You Lose! Rock Beats Scissors!';
        } else if (playerSelection === computerSelection) {
        text.textContent = 'Tie!'
        };
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
    }
    text2.textContent = `Your Score: ${a} \n\nComputer Score: ${b}`
    if (a === 3) {
        text2.textContent = 'GAME OVER     YOU WIN!!'
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        let reset = document.createElement('button')
        reset.setAttribute('id', 'reset')
        reset.textContent = 'Play Again'
        body.appendChild(reset)
        reset.onclick = () => location.reload()
    } else if (b === 3) {
        text2.textContent = 'GAME OVER     YOU LOSE!!'
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        let reset = document.createElement('button')
        reset.setAttribute('id', 'reset')
        reset.textContent = 'Play Again'
        body.appendChild(reset)
        reset.onclick = () => location.reload()
    }
 })
 
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

