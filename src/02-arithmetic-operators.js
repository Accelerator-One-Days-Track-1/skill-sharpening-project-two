// This function demonstrates addition and multiplication
// Remember: Multiplication is performed before addition!
// Instructions: Calculate the product of the second and third numbers, then add it to the first number
// Input: num1 = 5, num2 = 3, num3 = 2
// Output: result = 11
function calculateProductSum(num1, num2, num3) {
    return num1 + (num2 * num3);
}

// This function demonstrates division and subtraction
// Remember: Division is performed before subtraction!
// Instructions: Divide the first number by the second number, then subtract the third number
// Input: num1 = 10, num2 = 2, num3 = 3  
// Output: result = 2
function divideAndSubtract(num1, num2, num3) {
    return (num1 / num2) - num3;
}

// This function uses all four basic operators
// Remember: Operations are performed following PEMDAS!
// Instructions: Multiply the second and third numbers, divide by the fourth number,
//              add the first number, then subtract the fifth number
// Input: num1 = 5, num2 = 4, num3 = 6, num4 = 3, num5 = 2
// Output: result = 11
function complexCalculation(num1, num2, num3, num4, num5) {
    return ((num2 * num3) / num4) + num1 - num5;
}

// This function demonstrates exponents and division
// Remember: Exponents are performed before division!
// Instructions: Square the first number, then divide by the second number
// Input: num1 = 6, num2 = 2
// Output: result = 18
function squareAndDivide(num1, num2) {
    return (num1 * num1) / num2;
}

// This function works with remainders using the modulo operator
// Instructions: First divide num1 by num2, then find the remainder
// Input: num1 = 17, num2 = 5
// Output: result = 2
function findRemainder(num1, num2) {
    return num1 % num2;
}

module.exports = {
    calculateProductSum,
    divideAndSubtract,
    complexCalculation,
    squareAndDivide,
    findRemainder
};

