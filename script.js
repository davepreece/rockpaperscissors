const items = ["Rock", "Paper", "Scissors"]
let resultsEl = document.querySelector("#results-el")
let scoreEl = document.querySelector("#score-el")
let playerScore = 0
let computerScore = 0
let isAlive = false

scoreEl.textContent = playerScore + " - " + computerScore

//random hand function
function computerHand() {
    let randomItem = Math.floor(Math.random() * 3)
    return items[randomItem]
}



// player image clicks vs random hand function
function playerRock() {
    isAlive = true
    computerHand()
    if (computerHand() === items[2]) {
        resultsEl.textContent = items[0] + " crushes " + items[2] + "!" + " Well done!"
        playerScore++
    } else if (computerHand() === items[1]) {
        resultsEl.textContent = items[0] + " gets smothered by " + items[1] + "!" + " Unlucky!"
        computerScore++
    } else if (computerHand() === items[0]) {
        resultsEl.textContent = items[0] + " against " + items[0] + "!" + " Draw!"
    } 
    scoreEl.textContent = playerScore + " - " + computerScore
}

function playerPaper() {
    isAlive = true
    computerHand()
    if (computerHand() === items[0]) {
        resultsEl.textContent = items[1] + " smothers " + items[0] + "!" + " Well done!"
        playerScore++
    } else if (computerHand() === items[1]) {
        resultsEl.textContent = items[1] + " cuts " + items[1] + "!" + " Draw."
    } else {
        resultsEl.textContent = items[1] + " get slashed by " + items[2] + "!" + " Unlucky!"
        computerScore++
    }
    scoreEl.textContent = playerScore + " - " + computerScore
}

function playerScissors() {
    isAlive = true
    computerHand()
    if (computerHand() === items[0]) {
        resultsEl.textContent = items[2] + " gets crushed by " + items[0] + "!" + " Unlucky!"
        computerScore++
    } else if (computerHand() === items[1]) {
        resultsEl.textContent = items[2] + " cuts up " + items[1] + "!" + " Well done!"
        playerScore++
    } else {
        resultsEl.textContent = items[2] + " against " + items[2] + "!" + " Draw!"
    }
    scoreEl.textContent = playerScore + " - " + computerScore
}
