const {
    addTwoNumbers,
    squareNumber, 
    calculateAverage,
    isEven
} = require('../src/01-numbers');

describe('Numbers', () => {
    test('addTwoNumbers adds two numbers correctly', () => {
        expect(addTwoNumbers(2, 3)).toBe(5);
        expect(addTwoNumbers(-1, 1)).toBe(0);
        expect(addTwoNumbers(0, 0)).toBe(0);
    });

    test('squareNumber multiplies a number by itself', () => {
        expect(squareNumber(2)).toBe(4);
        expect(squareNumber(3)).toBe(9);
        expect(squareNumber(0)).toBe(0);
        expect(squareNumber(-2)).toBe(4);
    });

    test('calculateAverage returns the mean of three numbers', () => {
        expect(calculateAverage(1, 2, 3)).toBe(2);
        expect(calculateAverage(0, 0, 0)).toBe(0);
        expect(calculateAverage(-1, 0, 1)).toBe(0);
    });

    test('isEven correctly identifies even and odd numbers', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven(0)).toBe(true);
        expect(isEven(-2)).toBe(true);
        expect(isEven(-3)).toBe(false);
    });
});
