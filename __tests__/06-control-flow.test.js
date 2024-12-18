const {
    isInRange,
    isLeapYear,
    isValidTriangle,
    isDuringBusinessHours,
    fruitCounts
} = require('../src/06-control-flow');

describe('Control Flow', () => {
    test('isInRange checks if number is within range', () => {
        expect(isInRange(5, 1, 10)).toBe(true);
        expect(isInRange(1, 1, 10)).toBe(true);
        expect(isInRange(10, 1, 10)).toBe(true);
        expect(isInRange(0, 1, 10)).toBe(false);
        expect(isInRange(11, 1, 10)).toBe(false);
    });

    test('isLeapYear checks if year is a leap year', () => {
        expect(isLeapYear(2000)).toBe(true);
        expect(isLeapYear(2020)).toBe(true);
        expect(isLeapYear(2100)).toBe(false);
        expect(isLeapYear(2001)).toBe(false);
    });

    test('isValidTriangle checks if triangle is valid based on sides', () => {
        expect(isValidTriangle(3, 4, 5)).toBe(true);
        expect(isValidTriangle(5, 12, 13)).toBe(true);
        expect(isValidTriangle(1, 1, 3)).toBe(false);
        expect(isValidTriangle(2, 2, 5)).toBe(false);
    });

    test('isDuringBusinessHours checks if time is during business hours', () => {
        expect(isDuringBusinessHours(14, 30)).toBe(true);
        expect(isDuringBusinessHours(9, 0)).toBe(true);
        expect(isDuringBusinessHours(17, 0)).toBe(true);
        expect(isDuringBusinessHours(8, 59)).toBe(false);
        expect(isDuringBusinessHours(17, 1)).toBe(false);
    });

    test('fruitCounts returns a string with the count and properly pluralized fruit name', () => {
        expect(fruitCounts('apple', 2)).toBe('2 apples');
        expect(fruitCounts('banana', 1)).toBe('1 banana');
        expect(fruitCounts('cherry', 0)).toBe('0 cherries');
        expect(fruitCounts('date', 5)).toBe('5 dates');
    });
});
