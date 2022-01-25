const items = ["Rock", "Paper", "Scissors"]
let gameMessage = document.getElementById("gameMessage-el")
let score = document.getElementById("score-el")

score.innerText = `0 - 0`
gameMessage.innerText = "Choose your weapon..."

//random hand function
function randomWeapon() {
    let randomItem = Math.floor(Math.random() * 3)
    return items[randomItem]
}

function playRound(playerWeapon, computerWeapon) {
    
}









// console.log("Hello")