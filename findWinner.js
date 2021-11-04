/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
    if (board === undefined) throw new Error("board is required");
    else if (board.constructor !== Array) throw new Error("board must be an Array");
    else if (board.length != 3) throw new Error("board must contain 3 rows");
    board.forEach(row => { if (row.length != 3) throw new Error("board rows must contain 3 spaces") })
    let flattenedBoard = board.flat();
    if (!flattenedBoard.every(el => el == 'X' || el == '0' || el == null)) throw new Error("board can only contain X, 0 or null");
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let combo of winningCombinations) {
        if (flattenedBoard[combo[0]] == flattenedBoard[combo[1]] && flattenedBoard[combo[1]] == flattenedBoard[combo[2]]) return flattenedBoard[combo[0]];
    }
    return null;
};

module.exports = { findWinner };
