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
    ["", "", "", "", "", "", "", "", "", ""],
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
    let newPieceArray = getNewPieceArray(newPiece);
    let newPieceColor = pieceColors[newPiece];
    for (i = 0; i < newPieceArray.length; i++) {
        let row = newPieceArray[i][0] - 1;
        let column = newPieceArray[i][1] - 1;
        grid[row][column] = pieceColors[newPiece];
        var newBlock = document.createElement("div");
        newBlock.className = "block";
        newBlock.id = newPieceColor;
        let x_pos = 10*row;
        let y_pos = 5*column;
        newBlock.style.backgroundColor = newPieceColor;
        newBlock.style.left = x_pos+"%";
        newBlock.style.top = y_pos+"%";
        document.getElementById("tetris-bg").appendChild(newBlock);
        console.log("Created new block")
    }
}

function play(el) {
    var element = el;
    element.remove();
    currentBlock = chooseRandomPiece();
    createNewPiece(currentBlock);
    console.log(grid);
}


