let cells = document.querySelector(".cell"),
    cell = document.querySelectorAll(".cell"),
    Player = document.querySelector(".player"),
    reset = document.querySelector(".reset-btn"),
    currentPlayer = 'X',
    targetX = [],
    targetO = [],
    win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

Player.textContent = `Player ${currentPlayer}`;

cell.forEach((c) => {
    c.onclick = function() {
        let indexCell = Number(this.dataset.index);

        if (currentPlayer === "X"){
            c.textContent = 'X';
            targetX.push(indexCell);
            currentPlayer = 'O';
        } else {
            c.textContent = 'O';
            targetO.push(indexCell);
            currentPlayer = 'X';
        }
        c.style.pointerEvents = 'none';
        Player.textContent = `Player ${currentPlayer}`;
        winFun();
    }
});

winFun = function() {
    win.forEach((condition) => {
        if (condition.every(index => targetX.includes(index))) {
            console.log("X Wins! 🎉");
            endGame();
        } else if (condition.every(index => targetO.includes(index))) {
            console.log("O Wins! 🎉");
            endGame();
        }
    });
}

function endGame() {
    cell.forEach(c => c.style.pointerEvents = 'none');
}

reset.onclick = function() {
    window.location.reload();
}