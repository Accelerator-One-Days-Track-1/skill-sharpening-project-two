// This function demonstrates basic addition
// Instructions: Add two numbers together
// Input: num1 = 2, num2 = 3
// Output: result = 5
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// This function demonstrates squaring a number
// Instructions: Multiply the number by itself
// Input: num = 3
// Output: result = 9
function squareNumber(num) {
    return num * num;
}

// This function calculates the average of three numbers
// Instructions: Add all three numbers and divide by 3
// Input: num1 = 1, num2 = 2, num3 = 3 
// Output: result = 2
function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// This function checks if a number is even
// Instructions: Return true if the number is divisible by 2
// Input: num = 4
// Output: result = true
function isEven(num) {
    return num % 2 === 0;
}

module.exports = {
    addTwoNumbers,
    squareNumber,
    calculateAverage,
    isEven
};