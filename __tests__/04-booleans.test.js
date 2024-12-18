const {
    flipBoolean,
    returnBooleanValue,
    checkStrictEquality,
    isFalsy
} = require('../src/04-booleans');

describe('Booleans', () => {
    test('flipBoolean returns opposite boolean value', () => {
        expect(flipBoolean(true)).toBe(false);
        expect(flipBoolean(false)).toBe(true);
        expect(flipBoolean(Boolean(1))).toBe(false);
    });

    test('returnBooleanValue converts value to boolean', () => {
        expect(returnBooleanValue(1)).toBe(true);
        expect(returnBooleanValue(0)).toBe(false);
        expect(returnBooleanValue("")).toBe(false);
    });

    test('checkStrictEquality checks if values are strictly equal', () => {
        expect(checkStrictEquality(5, "5")).toBe(false);
        expect(checkStrictEquality(10, 10)).toBe(true);
        expect(checkStrictEquality(null, undefined)).toBe(false);
    });

    test('isFalsy checks if value is falsy', () => {
        expect(isFalsy(0)).toBe(true);
        expect(isFalsy("")).toBe(true);
        expect(isFalsy(false)).toBe(true);
        expect(isFalsy(1)).toBe(false);
    });
});
