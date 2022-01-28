let message = document.getElementById("message-el")
let score = document.getElementById("score-el")
const buttons = document.querySelectorAll(".button")
const items = ["Rock", "Paper", "Scissors"]
let playerItem = ""

function playerHand() {
    buttons.forEach(buttons => {
        buttons.addEventListener('click', function () {
            if (document.getElementsByClassName('rock button')) {
                playerItem = items[0]
                message.innerText = items[0]
            } else if (document.getElementsByClassName('paper button')) {
                playerItem = items[1]
                message.innerText = items[1]
            } else {
            playerItem = items[2]
            message.innerText = items[2]
            }
        })
    })
}
playerHand()


function computerItem() {
    return items[Math.floor(Math.random() * items.length)]   
}
