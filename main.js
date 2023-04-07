const resizeGridButton = document.querySelector(".resize");

const GRID_WIDTH = 960;
const MAX_CELLS = 100;
const MIN_CELLS = 2;

let defaultGridCells = 16;

function createGrid(gridCells) {
    let grid = document.querySelector(".grid");

    if (grid !== null && grid !== undefined) {
        let rows = document.querySelectorAll(".row");
        rows.forEach(row => row.remove());
    } else {
        grid = document.createElement("div");
        grid.classList.add("grid");
    }

    const boxSize = Math.trunc(GRID_WIDTH / gridCells);
    const root = document.querySelector("html");
    root.style.setProperty("--box-size", boxSize + "px");

    let row = null;
    let box = null;

    for (let i = 0; i < gridCells; i++) {
        row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridCells; j++) {
            box = document.createElement("div")
            box.classList.add("box");
            box.addEventListener("mouseenter", (event) => {
                event.target.classList.toggle("hover");
            })
            row.append(box);
        }
        grid.append(row);
    }
    document.querySelector(".main").append(grid);
}

resizeGridButton.addEventListener("click", () => {
    let newGridCells = prompt(`Enter new grid size between 2 and ${MAX_CELLS} : `);
    newGridCells = Number(newGridCells);
    
    while (isNaN(newGridCells) || newGridCells > MAX_CELLS || newGridCells < MIN_CELLS) {
        newGridCells = prompt(`Invalid input. Enter new grid size between 2 and ${MAX_CELLS} : `);
        newGridCells = Number(newGridCells);
    }

    createGrid(newGridCells);
})

createGrid(defaultGridCells);