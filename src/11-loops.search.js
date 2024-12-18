// This function iteratively maps each element to its index in the array using a for loop
// Instructions: Return an array where each element is replaced with its index. You must use a for loop.
// Input: array = ['a', 'b', 'c']
// Output: result = [0, 1, 2]
function iterativeMap(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(i);
    }
    return result;
}

// This function iteratively filters elements greater than target using a while loop
// Instructions: Return array containing only elements greater than target. You must use a while loop.
// Input: array = [5, 3, 7, 3, 1], target = 4
// Output: result = [5, 7]
function iterativeFilter(array, target) {
    let result = [];
    let i = 0;
    while (i < array.length) {
        if (array[i] > target) {
            result.push(array[i]);
        }
        i++;
    }
    return result;
}

// This function iteratively reduces array to sum of elements greater than target using a for loop
// Instructions: Return sum of all elements greater than target. You must use a for loop.
// Input: array = [5, 3, 7, 3, 1], target = 4
// Output: result = 12 (5 + 7)
function iterativeReduce(array, target) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > target) {
            sum += array[i];
        }
    }
    return sum;
}

// This function finds pairs of adjacent elements that sum to target using a for loop
// Instructions: Return array of pairs that sum to target value. Return empty array if no pairs found. You must use a for loop.
// Input: array = [2, 4, 3, 5, 1, 3], target = 6
// Output: result = [[2,4], [5,1], [3,3]]
function findPairs(array, target) {
    let pairs = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] + array[i + 1] === target) {
            pairs.push([array[i], array[i + 1]]);
        }
    }
    return pairs;
}

module.exports = {
    iterativeMap,
    iterativeFilter,
    iterativeReduce,
    findPairs
};


