const { solveTicTacToe } = require("./index");

describe("solveTicTacToe input testing suite", () => {
    // Dummy Objects
    const gameSequence = [
        ["X", 1, 1],
        ["O", 2, 2],
        ["X", 0, 1],
        ["O", 0, 0],
        ["X", 2, 1]
    ];

    const gameSequenceBadElements = [
        { sequence: [["O", 1, 2], ["X", 1, 0, 2]] },
        { sequence: [["O", 1, 1], ["X", 77, 0]] },
        { sequence: [["X", -1, 1], ["O", 2, 0]] }
    ];

    test("gameSequence is required", () => {
        expect(() => solveTicTacToe()).toThrow("an argument is required");
        expect(() => solveTicTacToe(3)).not.toThrow("an argument is required");
    });

    test("gameSequence must be an Array", () => {
        expect(() => solveTicTacToe("str")).toThrow("gameSequence must be an Array");
        expect(() => solveTicTacToe(gameSequence)).not.toThrow("gameSequence must be an Array");
    });

    test("gameSequence cannot be empty", () => {
        expect(() => solveTicTacToe([])).toThrow("gameSequence cannot be empty");
    });

    test("gameSequence must contain at most 9 events", () => {
        const overflowingGameSeq = [[], [], [], [], [], [], [], [], [], [], [], [], []];
        expect(() => solveTicTacToe(overflowingGameSeq)).toThrow("gameSequence must contain at most 9 events");
    });

    test.each(gameSequenceBadElements)("gameSequence elements follow the correct input format", (badSequence) => {
        expect(() => solveTicTacToe(badSequence.sequence)).toThrow("gameSequence elements must follow the correct format");
    });
})

describe("solveTicTacToe gameplay testing suite", () => {
    test("players must alternate", () => {
        const nonAlternatingGameSeq = [["X", 1, 1], ["X", 0, 0]];
        expect(() => solveTicTacToe(nonAlternatingGameSeq)).toThrow("players must alternate");
    });

    test("position already occupied", () => {
        const repeatingPositionGameSeq = [["X", 1, 1], ["O", 1, 0], ["X", 1, 1]];
        expect(() => solveTicTacToe(repeatingPositionGameSeq)).toThrow("position already occupied");
    });

    test("correct winner - row", () => {
        const gameSequence = [
            ["O", 0, 1],
            ["X", 2, 2],
            ["O", 0, 2],
            ["X", 2, 1],
            ["O", 0, 0]
        ];
        expect(solveTicTacToe(gameSequence)).toBe("O");
    });

    test("correct winner - column", () => {
        const gameSequence = [
            ["X", 1, 1],
            ["O", 2, 2],
            ["X", 0, 1],
            ["O", 0, 0],
            ["X", 2, 1]
        ];
        expect(solveTicTacToe(gameSequence)).toBe("X");
    });

    test("correct winner - diagonal", () => {
        const gameSequence = [
            ["X", 0, 0],
            ["O", 1, 2],
            ["X", 1, 1],
            ["O", 0, 1],
            ["X", 2, 2]
        ];
        expect(solveTicTacToe(gameSequence)).toBe("X");
    });

    test("no winner - full board", () => {
        const gameSequence = [
            ["X", 1, 1],
            ["O", 0, 0],
            ["X", 2, 0],
            ["O", 2, 1],
            ["X", 2, 2],
            ["O", 0, 2],
            ["X", 0, 1],
            ["O", 1, 2],
            ["X", 1, 0]
        ];
        expect(solveTicTacToe(gameSequence)).toBe(null);
    });
})
