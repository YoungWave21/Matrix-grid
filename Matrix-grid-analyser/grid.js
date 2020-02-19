function creategridarray() {
    return [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]]
}

function createadivgrid(thisGrid) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {

            // Make a new div ofr each element in the 2d grid
            let divEl = document.createElement("div");

            divEl.id = "Cell" + row + "-" + col;

            if (grid[row][col] == 1) {
                divEl.classList.add("grey");
            } else if (grid[row][col] == 2) {
                divEl.classList.add("player");
            }

            divEl.dataset.row = row;
            divEl.dataset.col = col;

            divEl / addEventListener("click", cellClicked);
            //adding the div to the container
            document.getElementById("container").append(divEl);
        }
    }
}

function cellClicked(event) {
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;
    if (row == player.row && col == player.col) {

    } else {
        event.target.classList = "";//Emtying the cell's class list

        if (grid[row][col] == 0) {
            event.target.classList.add("grey");
            grid[row][col] = 1;
        } else {
            event.target.classList.remove("grey");
            grid[row][col] = 0;

        }
    }

}