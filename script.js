let boxes = document.querySelectorAll(".box")
let newgame = document.querySelector(".play-btn")
let message = document.querySelector(".msg")
let container = document.querySelector(".container")
let restart = document.querySelector(".reset-btn")
let newGame = document.querySelector(".play-btn")

let winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let turnX = true;

boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.innerHTML == "") {
                if (turnX) {
                    box.innerHTML = "O";
                    turnX = false;
                } else {
                    box.innerHTML = "X";
                    turnX = true;
                }
            }
            checkWinner();
        })
})

let page = () => {
    container.style.display = "none";
    restart.style.display = "none";
    newGame.style.display = "block";
}

let checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerHTML;
        let val2 = boxes[pattern[1]].innerHTML;
        let val3 = boxes[pattern[2]].innerHTML;
    if (val1 !== "" && val2 !== "" && val3 !== "") {
        if (val1 == val2 && val2 == val3) {
           setTimeout(() => {
            page();
            message.innerHTML = `Congratulations! Winner is ${val1}`;
            disableBox();
           }, 400);
        }
    } 
    let isDraw = [...boxes].every((box) => {
       return box.innerHTML !== "";
    })
    
    if (isDraw) {
        setTimeout(() => {
            page();
            message.innerHTML = `It´s a draw!`;
            disableBox();
           }, 400);
    }
}
}

let enableBox = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = "";
    })
}

let disableBox = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

restart.addEventListener("click", () => {
    enableBox();
})

newGame.addEventListener("click", () => {
    container.style.display = "flex";
    restart.style.display = "block";
    newGame.style.display = "none";
    message.innerHTML = "";
    enableBox();
})