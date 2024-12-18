const {
    areBothPositive,
    isEitherEven,
    checkAccessRights,
    findFirstNonEmptyString
} = require('../src/05-boolean-evaluation');

describe('Boolean Evaluation', () => {
    test('areBothPositive checks if both numbers are positive', () => {
        expect(areBothPositive(5, 3)).toBe(true);
        expect(areBothPositive(-1, 3)).toBe(false);
        expect(areBothPositive(5, -2)).toBe(false);
        expect(areBothPositive(0, 1)).toBe(false);
    });

    test('isEitherEven checks if either number is even', () => {
        expect(isEitherEven(3, 4)).toBe(true);
        expect(isEitherEven(2, 3)).toBe(true);
        expect(isEitherEven(3, 5)).toBe(false);
        expect(isEitherEven(2, 4)).toBe(true);
    });

    test('checkAccessRights evaluates complex login condition', () => {
        expect(checkAccessRights(false, true, true, false)).toBe(true);
        expect(checkAccessRights(true, false, true, false)).toBe(true);
        expect(checkAccessRights(false, true, false, true)).toBe(true);
        expect(checkAccessRights(false, false, true, false)).toBe(false);
    });

    test('findFirstNonEmptyString returns first non-empty string', () => {
        expect(findFirstNonEmptyString("", "", "hello", "world", "")).toBe("hello");
        expect(findFirstNonEmptyString("first", "", "", "", "")).toBe("first");
        expect(findFirstNonEmptyString("", "", "", "", "last")).toBe("last");
        expect(findFirstNonEmptyString("", "", "", "", "")).toBe("");
    });
});
