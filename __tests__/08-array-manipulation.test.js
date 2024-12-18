const {
    combineArrays,
    removeFirstElement,
    swapElements,
    reverseArray
} = require('../src/08-array-manipulation');

describe('Array Manipulation', () => {
    test('combineArrays combines two arrays into one', () => {
        expect(combineArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
        expect(combineArrays([], [1])).toEqual([1]);
        expect(combineArrays(['a', 'b'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
        expect(combineArrays([true], [false])).toEqual([true, false]);
    });

    test('removeFirstElement removes first element from array', () => {
        expect(removeFirstElement([1, 2, 3])).toEqual([2, 3]);
        expect(removeFirstElement([1])).toEqual([]);
        expect(removeFirstElement(['a', 'b', 'c'])).toEqual(['b', 'c']);
        expect(removeFirstElement([true, false])).toEqual([false]);
    });

    test('swapElements swaps two elements at given indices', () => {
        expect(swapElements([1, 2, 3], 0, 2)).toEqual([3, 2, 1]);
        expect(swapElements(['a', 'b'], 0, 1)).toEqual(['b', 'a']);
        expect(swapElements([1, 2, 3, 4], 1, 3)).toEqual([1, 4, 3, 2]);
        expect(swapElements([true, false, true], 0, 2)).toEqual([true, false, true]);
    });

    test('reverseArray adds two elements and returns array reversed', () => {
        expect(reverseArray([1, 2, 3], 4, 5)).toEqual([5, 4, 3, 2, 1]);
        expect(reverseArray([], 1, 2)).toEqual([2, 1]);
        expect(reverseArray(['a', 'b'], 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
        expect(reverseArray([true], false, true)).toEqual([true, false, true]);
    });
});
