const {
    addElementToArray,
    findMiddleElement,
    doesElementExist,
    getArraySlice
} = require('../src/07-array-basics');

describe('Array Basics', () => {
    test('addElementToArray adds element to end of array', () => {
        expect(addElementToArray([1, 2], 3)).toEqual([1, 2, 3]);
        expect(addElementToArray([], 1)).toEqual([1]);
        expect(addElementToArray(['a', 'b'], 'c')).toEqual(['a', 'b', 'c']);
        expect(addElementToArray([true], false)).toEqual([true, false]);
    });

    test('findMiddleElement returns middle element of array', () => {
        expect(findMiddleElement([1, 2, 3, 4, 5])).toBe(3);
        expect(findMiddleElement([1, 2, 3, 4])).toBe(2);
        expect(findMiddleElement(['a', 'b', 'c'])).toBe('b');
        expect(findMiddleElement([1])).toBe(1);
    });

    test('doesElementExist checks if element exists in array', () => {
        expect(doesElementExist([1, 2, 3], 2)).toBe(true);
        expect(doesElementExist([1, 2, 3], 4)).toBe(false);
        expect(doesElementExist(['a', 'b', 'c'], 'b')).toBe(true);
        expect(doesElementExist([], 1)).toBe(false);
    });

    test('getArraySlice returns slice of array from start to end index', () => {
        expect(getArraySlice([1, 2, 3, 4, 5], 1, 3)).toEqual([2, 3, 4]);
        expect(getArraySlice([1, 2, 3], 0, 2)).toEqual([1, 2, 3]);
        expect(getArraySlice(['a', 'b', 'c', 'd'], 1, 2)).toEqual(['b', 'c']);
        expect(getArraySlice([1, 2], 0, 0)).toEqual([1]);
    });
});
