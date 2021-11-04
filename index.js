const { findWinner } = require("./findWinner");

/**
 * This function accepts a game sequence array where each element represents one placement of an X or O on a Tic Tac Toe board. 
 * 
 * The function should return "X" if player X has won, "O" if the player O has won, and null if there is currently no winner.
 * @param {Array} gameSequence
 */
const solveTicTacToe = (gameSequence) => {
    if (gameSequence === undefined) throw new Error("an argument is required");
    else if (!Array.isArray(gameSequence)) throw new Error("gameSequence must be an Array");
    else if (gameSequence.length == 0) throw new Error("gameSequence cannot be empty");
    else if (gameSequence.length > 9) throw new Error("gameSequence must contain at most 9 events");
    gameSequence.forEach((el, index) => {
        if (el.length != 3) throw new Error("gameSequence elements must follow the correct format");
        else if (typeof el[0] != "string") throw new Error("gameSequence elements must follow the correct format");
        else if (typeof el[1] != "number") throw new Error("gameSequence elements must follow the correct format");
        else if (typeof el[2] != "number") throw new Error("gameSequence elements must follow the correct format");
        else if (el[0] != "O" && el[0] != "X") throw new Error("gameSequence elements must follow the correct format");
        else if (el[1] < 0 || el[1] > 2) throw new Error("gameSequence elements must follow the correct format");
        else if (el[2] < 0 || el[2] > 2) throw new Error("gameSequence elements must follow the correct format");
        else if (gameSequence[index + 1]) {
            if (el[0] == gameSequence[index + 1][0]) throw new Error("players must alternate");
        }
    })

    let board = [...Array(3)].map(e => Array(3).fill(null));
    
    for (el of gameSequence){
        if (board[el[1]][el[2]]) throw new Error ("position already occupied");
        board[el[1]][el[2]] = el[0];
        let winner = findWinner(board);
        if (winner) return winner;
    }
    return null;
}

module.exports = { solveTicTacToe }
