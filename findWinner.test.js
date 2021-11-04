const { findWinner } = require("./findWinner");

describe("findWinner testing suite", () => {
    test("an argument is required", () => {
        expect(findWinner).toThrow("board is required");
    });
    test("board must be an Array", () => {
        expect(() => findWinner(33)).toThrowError("board must be an Array");
    });
    test("board must contain 3 rows", () => {
        let input = [["X", "0", 3], ["X", null, "0"]];
        expect(() => findWinner(input)).toThrowError("board must contain 3 rows");
    });
    test("board rows must contain 3 spaces", () => {
        let input = [["X", "0", 3], ["X", null, "0"], ["X", null]];
        expect(() => findWinner(input)).toThrowError("board rows must contain 3 spaces");
    });
    test("board must only contain 'X', '0', or null", () => {
        let input = [["X", "0", 3], ["X", null, "0"], ["X", null, "0"]];
        expect(() => findWinner(input)).toThrowError("board can only contain X, 0 or null");
        input = [["X", "0", "X"], ["X", null, "0"], ["X", null, "0"]];
        expect(() => findWinner(input)).not.toThrowError("board can only contain X, 0 or null");
    });
    test("correct output with provided input", () => {
        let input = [["X", "0", null], ["X", null, "0"], ["X", null, "0"]];
        expect(findWinner(input)).toBe("X");
    });
    test("correct output with modified input", () => {
        let input = [["0", "0", "0"], ["X", null, "X"], ["X", null, "0"]];
        expect(findWinner(input)).toBe("0");
        input = [[null, "0", "X"], ["0", "X", null], ["X", null, null]];
        expect(findWinner(input)).toBe("X");
        input = [["X", null, null], ["0", "0", "0"], ["X", null, null]];
        expect(findWinner(input)).toBe("0");
    });
    test("correct output with no winner ", () => {
        let input = [["0", "X", "0"], ["X", null, "0"], ["X", null, null]];
        expect(findWinner(input)).toBe(null);
    });
});
