// Arrays and Associative Arrays

// Array of strings to represent tetris grid
const grid = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""]
]

// Associative array for tetris pieces
const pieces = [];
pieces["L"] = [[1,1],[1,2],[1,3],[2,3]];
pieces["Z"] = [[1,1],[2,1],[2,2],[3,2]];
pieces["S"] = [[1,2],[2,1],[2,2],[3,1]];
pieces["T"] = [[1,1],[2,1],[2,2],[3,1]];
pieces["O"] = [[1,1],[1,2],[2,1],[2,2]];
pieces["I"] = [[1,1],[1,2],[1,3],[1,4]];

// Array of piece names
const pieceNames = ["L", "Z", "S", "T", "O", "I"];

// Associative array for piece colors
const pieceColors = [];
pieceColors["L"] = "blue";
pieceColors["Z"] = "red";
pieceColors["S"] = "green";
pieceColors["T"] = "purple";
pieceColors["O"] = "yellow";
pieceColors["I"] = "cyan";

var currentBlockCoords = [];

var initialX = 0;
var initialY = 0;
var amount = 20.75;

var pieceIsPlaced = false;

var score = 0;


// Functions


// Choose random piece
function chooseRandomPiece() {
    let randomIndex = Math.floor(Math.random() * 6);
    return pieceNames[randomIndex];
}

function getNewPieceArray(newPiece) {
    return pieces[newPiece];
}

function getNewPieceStartCoords(newPiece) {
    let pieceArray = getNewPieceArray(newPiece);
    for (i = 0; i < pieceArray.length; i++) {
    }
}

function checkStartingCoords(newPiece) {
    let startingCoordsAreValid = true
    let newPieceArray = getNewPieceArray(newPiece);
    for (i = 0; i < newPieceArray.length; i++) {
        let row = newPieceArray[i][0] - 1;
        let column = newPieceArray[i][1] - 1;
        if (grid[row][column] != "") {
            startingCoordsAreValid = false;
            break;
        }
    }
    return startingCoordsAreValid;
}

function createNewPiece(newPiece) {
    /*
    pieceIsPlaced = false;
    for (x = 0; x < currentBlockCoords.length; x++) {
        currentBlockCoords[x] = [];
    }

     */
    let newPieceArray = getNewPieceArray(newPiece);
    let newPieceColor = pieceColors[newPiece];
    for (i = 0; i < newPieceArray.length; i++) {
        let row = newPieceArray[i][0] - 1;
        let column = newPieceArray[i][1] - 1;
        currentBlockCoords.push([row, column]);
        grid[row][column] = pieceColors[newPiece];
        var newBlock = document.createElement("div");
        newBlock.className = "block";
        newBlock.id = newPieceColor;
        let x_pos = 10*column;
        let y_pos = 5*row;
        newBlock.style.backgroundColor = newPieceColor;
        newBlock.style.left = x_pos+"%";
        newBlock.style.top = y_pos+"%";
        document.getElementById("tetris-bg").appendChild(newBlock);
        console.log("Created new block")
    }
}

function newPiece() {
    pieceIsPlaced = false;
    currentBlock = chooseRandomPiece();
    createNewPiece(currentBlock);
}

function checkKeys(currentBlock) {
    newPiece()
    document.addEventListener("keydown", function(e) {
        var pressedKey = e.key;
        switch(pressedKey) {
            case "ArrowRight":
                if (pieceIsPlaced == true) {
                    newPiece();
                    break;
                }
                moveRight(currentBlock);
                break;
            case "ArrowLeft":
                if (pieceIsPlaced == true) {
                    newPiece();
                    break;
                }
                moveLeft(currentBlock);
                break;
            case "ArrowDown":
                if (pieceIsPlaced == true) {
                    newPiece();
                    break;
                }
                moveDown(currentBlock);
                break;
            default:
                break;
        }
    })
}


function moveRight(block) {
    blockCanMoveRight = true;
    blockColor = pieceColors[block];
    for (i = 0; i < currentBlockCoords.length; i++) {
        let currentColumn = currentBlockCoords[i][1];
        if (currentColumn > 8) {
            blockCanMoveRight = false;
            break;
        }
    }
    if (block == "S") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block3row = currentBlockCoords[2][0];
        let block3column = currentBlockCoords[2][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block1row][block1column+1] != "")||(grid[block3row][block3column+1] != "")||(grid[block4row][block4column+1] != "")) {
            blockCanMoveRight = false;
        }
    }
    else if (block == "Z") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block3row = currentBlockCoords[2][0];
        let block3column = currentBlockCoords[2][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block1row][block1column+1] != "")||(grid[block3row][block3column+1] != "")||(grid[block4row][block4column+1] != "")) {
            blockCanMoveRight = false;
        }
    }
    else if (block == "L") {
        let block3row = currentBlockCoords[2][0];
        let block3column = currentBlockCoords[2][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block3row][block3column+1] != "")||(grid[block4row][block4column+1] != "")) {
            blockCanMoveRight = false;
        }
    }
    else if (block == "T") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block3row = currentBlockCoords[2][0];
        let block3column = currentBlockCoords[2][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block1row][block1column+1] != "")||(grid[block3row][block3column+1] != "")||(grid[block4row][block4column+1] != "")) {
            blockCanMoveRight = false;
        }
    }
    else if (block == "O") {
        let block2row = currentBlockCoords[1][0];
        let block2column = currentBlockCoords[1][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block2row][block2column+1] != "")||(grid[block4row][block4column+1] != "")) {
            blockCanMoveRight = false;
        }
    }
    else if (block == "I") {
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if (grid[block4row][block4column+1] != "") {
            blockCanMoveRight = false;
        }
    }
    for (x = 0; x < currentBlockCoords.length; x++) {
        let currentRow = currentBlockCoords[x][0];
        if (currentRow > 18) {
            pieceIsPlaced = true;
            blockCanMoveRight = false;
            break;
        }
    }
    if (blockCanMoveRight == true) {
        for (j = 0; j < currentBlockCoords.length; j++) {
            // wipe the piece from the grid
            let currentRow = currentBlockCoords[j][0];
            let currentColumn = currentBlockCoords[j][1];
            grid[currentRow][currentColumn] = "";
        }
        for (k = 0; k < currentBlockCoords.length; k++) {
            currentBlockCoords[k][1] += 1;
            // add the piece's new position to the grid
            let newRow = currentBlockCoords[k][0];
            let newColumn = currentBlockCoords[k][1]
            grid[newRow][newColumn] = blockColor;
        }
        initialX += amount;
        let tetrisGrid = document.getElementById("tetris-bg");
        let lastBlockDiv = tetrisGrid.lastChild;
        let secondToLastBlockDiv = lastBlockDiv.previousSibling;
        let thirdToLastBlockDiv = secondToLastBlockDiv.previousSibling;
        let fourthToLastBlockDiv = thirdToLastBlockDiv.previousSibling;
        lastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        secondToLastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        thirdToLastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        fourthToLastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        console.log("Block moved right");
    }
}

function moveLeft(block) {
    blockCanMoveLeft = true;
    blockColor = pieceColors[block];
    for (i = 0; i < currentBlockCoords.length; i++) {
        let currentColumn = currentBlockCoords[i][1];
        if (currentColumn < 1) {
            blockCanMoveLeft = false;
            break;
        }
    }
    if (block == "S") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block2row = currentBlockCoords[1][0];
        let block2column = currentBlockCoords[1][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block1row][block1column-1] != "")||(grid[block2row][block2column-1] != "")||(grid[block4row][block4column-1] != "")) {
            blockCanMoveLeft = false;
        }
    }
    else if (block == "Z") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block2row = currentBlockCoords[1][0];
        let block2column = currentBlockCoords[1][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block1row][block1column-1] != "")||(grid[block2row][block2column-1] != "")||(grid[block4row][block4column-1] != "")) {
            blockCanMoveLeft = false;
        }
    }
    else if (block == "L") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block1row][block1column-1] != "")||(grid[block4row][block4column-1] != "")) {
            blockCanMoveLeft = false;
        }
    }
    else if (block == "T") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block2row = currentBlockCoords[1][0];
        let block2column = currentBlockCoords[1][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block1row][block1column-1] != "")||(grid[block2row][block2column-1] != "")||(grid[block4row][block4column-1] != "")) {
            blockCanMoveLeft = false;
        }
    }
    else if (block == "O") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block3row = currentBlockCoords[2][0];
        let block3column = currentBlockCoords[2][1];
        if ((grid[block1row][block1column-1] != "")||(grid[block3row][block3column-1] != "")) {
            blockCanMoveLeft = false;
        }
    }
    else if (block == "I") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        if (grid[block1row][block1column-1] != "") {
            blockCanMoveLeft = false;
        }
    }
    for (x = 0; x < currentBlockCoords.length; x++) {
        let currentRow = currentBlockCoords[x][0];
        if (currentRow > 18) {
            pieceIsPlaced = true;
            blockCanMoveLeft = false;
            break;
        }
    }
    if (blockCanMoveLeft == true) {
        for (j = 0; j < currentBlockCoords.length; j++) {
            // wipe the piece from the grid
            let currentRow = currentBlockCoords[j][0];
            let currentColumn = currentBlockCoords[j][1];
            grid[currentRow][currentColumn] = "";
        }
        for (k = 0; k < currentBlockCoords.length; k++) {
            currentBlockCoords[k][1] -= 1;
            // add the piece's new position to the grid
            let newRow = currentBlockCoords[k][0];
            let newColumn = currentBlockCoords[k][1]
            grid[newRow][newColumn] = blockColor;
        }
        initialX -= amount;
        let tetrisGrid = document.getElementById("tetris-bg");
        let lastBlockDiv = tetrisGrid.lastChild;
        let secondToLastBlockDiv = lastBlockDiv.previousSibling;
        let thirdToLastBlockDiv = secondToLastBlockDiv.previousSibling;
        let fourthToLastBlockDiv = thirdToLastBlockDiv.previousSibling;
        lastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        secondToLastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        thirdToLastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        fourthToLastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        console.log("Block moved left");
    }
}

function moveDown(block) {
    blockCanMoveDown = true;
    blockColor = pieceColors[block];
    for (i = 0; i < currentBlockCoords.length; i++) {
        let currentRow = currentBlockCoords[i][0];
        if (currentRow > 18) {
            pieceIsPlaced = true;
            blockCanMoveDown = false;
            break;
        }
    }
    if (block == "S") {
        let block3row = currentBlockCoords[2][0];
        let block3column = currentBlockCoords[2][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block3row+1][block3column] != "")||(grid[block4row+1][block4column] != "")) {
            blockCanMoveDown = false;
            pieceIsPlaced = true;
        }
    }
    else if (block == "Z") {
        let block2row = currentBlockCoords[1][0];
        let block2column = currentBlockCoords[1][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block2row+1][block2column] != "")||(grid[block4row+1][block4column] != "")) {
            blockCanMoveDown = false;
            pieceIsPlaced = true;
        }
    }
    else if (block == "L") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block2row = currentBlockCoords[1][0];
        let block2column = currentBlockCoords[1][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block1row+1][block1column] != "")||(grid[block2row+1][block2column] != "")||(grid[block4row+1][block4column] != "")) {
            blockCanMoveDown = false;
            pieceIsPlaced = true;
        }
    }
    else if (block == "T") {
        let block3row = currentBlockCoords[2][0];
        let block3column = currentBlockCoords[2][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block3row+1][block3column] != "")||(grid[block4row+1][block4column] != "")) {
            blockCanMoveDown = false;
            pieceIsPlaced = true;
        }
    }
    else if (block == "O") {
        let block3row = currentBlockCoords[2][0];
        let block3column = currentBlockCoords[2][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block3row+1][block3column] != "")||(grid[block4row+1][block4column] != "")) {
            blockCanMoveDown = false;
            pieceIsPlaced = true;
        }
    }
    else if (block == "I") {
        let block1row = currentBlockCoords[0][0];
        let block1column = currentBlockCoords[0][1];
        let block2row = currentBlockCoords[1][0];
        let block2column = currentBlockCoords[1][1];
        let block3row = currentBlockCoords[2][0];
        let block3column = currentBlockCoords[2][1];
        let block4row = currentBlockCoords[3][0];
        let block4column = currentBlockCoords[3][1];
        if ((grid[block1row+1][block1column] != "")||(grid[block2row+1][block2column] != "")||(grid[block3row+1][block3column] != "")||(grid[block4row+1][block4column] != "")) {
            blockCanMoveDown = false;
            pieceIsPlaced = true;
        }
    }
    if (blockCanMoveDown == true) {
        for (j = 0; j < currentBlockCoords.length; j++) {
            // wipe the piece from the grid
            let currentRow = currentBlockCoords[j][0];
            let currentColumn = currentBlockCoords[j][1];
            grid[currentRow][currentColumn] = "";
        }
        for (k = 0; k < currentBlockCoords.length; k++) {
            currentBlockCoords[k][0] += 1;
            // add the piece's new position to the grid
            let newRow = currentBlockCoords[k][0];
            let newColumn = currentBlockCoords[k][1]
            grid[newRow][newColumn] = blockColor;
        }
        initialY += amount;
        let tetrisGrid = document.getElementById("tetris-bg");
        let lastBlockDiv = tetrisGrid.lastChild;
        let secondToLastBlockDiv = lastBlockDiv.previousSibling;
        let thirdToLastBlockDiv = secondToLastBlockDiv.previousSibling;
        let fourthToLastBlockDiv = thirdToLastBlockDiv.previousSibling;
        lastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        secondToLastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        thirdToLastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        fourthToLastBlockDiv.style.transform = "translate(" + initialX + "%, " + initialY + "%)";
        console.log("Block moved down");
    }
}

function dropDown(block) {
    blockCanDropDown = true;
    while (blockCanDropDown == true) {
        for (i = 0; i < currentBlockCoords.length; i++) {
            let currentRow = currentBlockCoords[i][0];
            if (currentRow > 18) {
                blockCanDropDown = false;
                break;
            }
        }
        interval = setInterval(function (block) {
            for (j = 0; j < currentBlockCoords.length; j++) {
                // wipe the piece from the grid
                let currentRow = currentBlockCoords[j][0];
                let currentColumn = currentBlockCoords[j][1];
                grid[currentRow][currentColumn] = "";
            }
            for (k = 0; k < currentBlockCoords.length; k++) {
                currentBlockCoords[k][0] += 1;
                // add the piece's new position to the grid
                let newRow = currentBlockCoords[k][0];
                let newColumn = currentBlockCoords[k][1]
                grid[newRow][newColumn] = blockColor;
            }
            initial += amount;
            let tetrisGrid = document.getElementById("tetris-bg");
            let lastBlockDiv = tetrisGrid.lastChild;
            let secondToLastBlockDiv = lastBlockDiv.previousSibling;
            let thirdToLastBlockDiv = secondToLastBlockDiv.previousSibling;
            let fourthToLastBlockDiv = thirdToLastBlockDiv.previousSibling;
            lastBlockDiv.style.transform = "translateY(" + initial + "px)";
            secondToLastBlockDiv.style.transform = "translateY(" + initial + "px)";
            thirdToLastBlockDiv.style.transform = "translateY(" + initial + "px)";
            fourthToLastBlockDiv.style.transform = "translateY(" + initial + "px)";
        }, 1000);
    }
    clearInterval(interval);
}

function play(el) {
    var element = el;
    element.remove();
    game();
}

function moveAround(e) {
    var pressedKey = e.key;
    switch(pressedKey) {
        case "ArrowRight":
            if (pieceIsPlaced == true) {
                var oneRowIsComplete = false;
                for (k = 0; k < grid.length; k++) {
                    let row = grid[k];
                    let blockCounter = 0;
                    for (w = 0; w < row.length; w++) {
                        if (row[w] != "") {
                            blockCounter += 1;
                        }
                    }
                    if (blockCounter == 10) {
                        oneRowIsComplete = true;
                        break;
                    }
                }
                document.removeEventListener("keydown", moveAround);
                game();
                break;
            }
            console.log(grid);
            moveRight(currentBlock);
            break;
        case "ArrowLeft":
            if (pieceIsPlaced == true) {
                document.removeEventListener("keydown", moveAround);
                game();
                break;
            }
            console.log(grid);
            moveLeft(currentBlock);
            break;
        case "ArrowDown":
            if (pieceIsPlaced == true) {
                document.removeEventListener("keydown", moveAround);
                game();
                break;
            }
            console.log(grid);
            moveDown(currentBlock);
            break;
        default:
            break;
    }
}

function game() {
    initialX = 0;
    initialY = 0;
    amount = 100;
    currentBlockCoords = [];
    pieceIsPlaced = false;
    currentBlock = chooseRandomPiece();
    createNewPiece(currentBlock);
    document.addEventListener("keydown", moveAround);
}

