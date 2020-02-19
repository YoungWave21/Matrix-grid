// Grid/maze designer
//Global variables
const NUM_ROWS = 10;
const NUM_COLS = 10;

//create and array to represent a grid
let grid = creategridarray();

let player = {
    row: 5,
    col: 5
}

grid[player.row][player.row] = 2;
createadivgrid(grid);

document.addEventListener("keydown", moveplayer);

function moveplayer(event) {
    console.log(event.code)
    if (event.code == "ArrowRight") {
        updateplayer(player.row, player.col + 1);
    } else if (event.code == "ArrowLeft") {
        updateplayer(player.row, player.col - 1);
    } else if (event.code == "ArrowDown") {
        updateplayer(player.row+1, player.col);
    } else if (event.code == "ArrowUp") {
        updateplayer(player.row - 1, player.col);
    }
}

function updateplayer(newRow, newCol) {
    document.getElementById("Cell" + player.row + "-" + player.col).classList.remove("player");
    grid[player.row][player.col] = 0;
    player.row = newRow;
    player.col = newCol;
    document.getElementById("Cell" + player.row + "-" + player.col).classList.add("player");
    grid[player.row][player.col] = 2;
}