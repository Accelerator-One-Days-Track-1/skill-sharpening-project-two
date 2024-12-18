const {
    calculateProductSum,
    divideAndSubtract,
    complexCalculation,
    squareAndDivide,
    findRemainder
} = require('../src/02-arithmetic-operators');

describe('Arithmetic Operators', () => {
    test('calculateProductSum multiplies second and third numbers and adds to first', () => {
        expect(calculateProductSum(5, 3, 2)).toBe(11);
        expect(calculateProductSum(1, 4, 3)).toBe(13);
        expect(calculateProductSum(0, 5, 2)).toBe(10);
    });

    test('divideAndSubtract divides first by second then subtracts third', () => {
        expect(divideAndSubtract(10, 2, 3)).toBe(2);
        expect(divideAndSubtract(20, 4, 2)).toBe(3);
        expect(divideAndSubtract(15, 3, 1)).toBe(4);
    });

    test('complexCalculation performs multiple operations in correct order', () => {
        expect(complexCalculation(5, 4, 6, 3, 2)).toBe(11);
        expect(complexCalculation(2, 3, 3, 1, 1)).toBe(10);
        expect(complexCalculation(0, 6, 4, 2, 3)).toBe(9);
    });

    test('squareAndDivide squares first number then divides by second', () => {
        expect(squareAndDivide(6, 2)).toBe(18);
        expect(squareAndDivide(4, 2)).toBe(8);
        expect(squareAndDivide(3, 3)).toBe(3);
    });

    test('findRemainder returns correct remainder after division', () => {
        expect(findRemainder(17, 5)).toBe(2);
        expect(findRemainder(10, 3)).toBe(1);
        expect(findRemainder(8, 4)).toBe(0);
    });
});
