const { findWinner } = require("./findWinner");

describe("findWinner testing suite", () => {
    test("an argument is required", () => {
        expect(findWinner).toThrow("board is required");
    });
    test("board must be an Array", () => {
        expect(() => findWinner(33)).toThrowError("board must be an Array");
    });
    test("board must contain 3 rows", () => {
        let input = [["X", "O", 3], ["X", null, "O"]];
        expect(() => findWinner(input)).toThrowError("board must contain 3 rows");
    });
    test("board rows must contain 3 spaces", () => {
        let input = [["X", "O", 3], ["X", null, "O"], ["X", null]];
        expect(() => findWinner(input)).toThrowError("board rows must contain 3 spaces");
    });
    test("board must only contain 'X', 'O', or null", () => {
        let input = [["X", "O", 3], ["X", null, "O"], ["X", null, "O"]];
        expect(() => findWinner(input)).toThrowError("board can only contain X, O or null");
        input = [["X", "O", "X"], ["X", null, "O"], ["X", null, "O"]];
        expect(() => findWinner(input)).not.toThrowError("board can only contain X, O or null");
    });
    test("correct output with provided input", () => {
        let input = [["X", "O", null], ["X", null, "O"], ["X", null, "O"]];
        expect(findWinner(input)).toBe("X");
    });
    test("correct output with modified input", () => {
        let input = [["O", "O", "O"], ["X", null, "X"], ["X", null, "O"]];
        expect(findWinner(input)).toBe("O");
        input = [[null, "O", "X"], ["O", "X", null], ["X", null, null]];
        expect(findWinner(input)).toBe("X");
        input = [["X", null, null], ["O", "O", "O"], ["X", null, null]];
        expect(findWinner(input)).toBe("O");
    });
    test("correct output with no winner ", () => {
        let input = [["O", "X", "O"], ["X", null, "O"], ["X", null, null]];
        expect(findWinner(input)).toBe(null);
    });
});
