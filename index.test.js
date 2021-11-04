const { solveTicTacToe } = require("./index");

describe("solveTicTacToe testing suite", () => {
    test("gameSequence is required", () => {
        expect(() => solveTicTacToe()).toThrow("an argument is required");
        expect(() => solveTicTacToe(3)).not.toThrow("an argument is required");
    });
})
