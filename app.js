let player1 = prompt("write the name of player 1")
let player2 = prompt("write the name of player 2")

let player1Name = document.querySelector('.player1Name')
let player2Name = document.querySelector('.player2Name')
let DiceRoll = document.querySelector('#DiceRoll')

player1Name.textContent = player1
player2Name.textContent = player2

DiceRoll.addEventListener("click" , () => {
    let randomNumber = Math.ceil(Math.random() * 6)
    console.log(randomNumber);

})

