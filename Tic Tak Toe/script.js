console.log("Welcome to Tic Tak Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false
document.body.style.background = "linear-gradient(130deg, blue, white)";

//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to check for a win 
const checkWin = () => {
    let boxtext = document.querySelectorAll(".boxText")
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 24, 0],
        [0, 3, 6, -6, 15, 90],
        [1, 4, 7, 4, 15, 90],
        [2, 5, 8, 13, 15, 90],
        [0, 4, 8, 4, 15, 44],
        [2, 4, 6, 3, 15, 137],
    ]
    win.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== "") {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".imgbox").querySelector("img").style.width = "140px"
            gameover.play();
            let line= document.querySelector(".line")
            line.style.width = "23vw"
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//game logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxText")
    element.addEventListener('click', () => {
        if (boxtext.innerText === "" && !isgameover) {
            boxtext.innerText = turn
            turn = changeTurn();
            audioTurn.play()
            checkWin()
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })
})

//add onclick listener to reset button
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxText")
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
    document.querySelector(".imgbox").querySelector("img").style.width = "0"
    document.querySelector(".line").style.display = "none";
    document.querySelector(".line").style.width = "0";
})