const {
    calculateFactorial,
    sumEvenNumbers,
    getMultiples,
    findCommonMultiple,
    getFibonacciNumber
} = require('../src/09-loops-numbers');

describe('Loops and Numbers', () => {
    test('calculateFactorial calculates factorial of a number', () => {
        expect(calculateFactorial(5)).toBe(120);
        expect(calculateFactorial(3)).toBe(6);
        expect(calculateFactorial(1)).toBe(1);
        expect(calculateFactorial(0)).toBe(1);
    });

    test('sumEvenNumbers finds sum of even numbers in range', () => {
        expect(sumEvenNumbers(1, 10)).toBe(30);
        expect(sumEvenNumbers(1, 5)).toBe(6);
        expect(sumEvenNumbers(2, 2)).toBe(2);
        expect(sumEvenNumbers(1, 1)).toBe(0);
    });

    test('getMultiples creates array of multiples', () => {
        expect(getMultiples(3, 4)).toEqual([3, 6, 9, 12]);
        expect(getMultiples(2, 3)).toEqual([2, 4, 6]);
        expect(getMultiples(5, 1)).toEqual([5]);
        expect(getMultiples(7, 0)).toEqual([]);
    });

    test('findCommonMultiple finds first number divisible by both inputs', () => {
        expect(findCommonMultiple(3, 4, 1)).toBe(12);
        expect(findCommonMultiple(2, 3, 5)).toBe(6);
        expect(findCommonMultiple(4, 6, 10)).toBe(12);
        expect(findCommonMultiple(5, 7, 34)).toBe(35);
    });

    test('getFibonacciNumber returns nth Fibonacci number', () => {
        expect(getFibonacciNumber(6)).toBe(8);
        expect(getFibonacciNumber(1)).toBe(1);
        expect(getFibonacciNumber(2)).toBe(1);
        expect(getFibonacciNumber(7)).toBe(13);
    });
});

