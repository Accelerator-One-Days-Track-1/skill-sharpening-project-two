// This function checks if two numbers are both positive
// Instructions: Return true if both numbers are greater than 0
function areBothPositive(num1, num2) {
    return num1 > 0 && num2 < 0;
}

// This function checks if either number is even
// Instructions: Return true if at least one number is divisible by 2
function isEitherEven(num1, num2) {
    return num1 % 2 === 0 || num2 % 2 === 0;
}

// This function evaluates a complex login condition
// Instructions: Return true if (user is admin OR has permission) AND (token is valid OR is local)
function checkAccessRights(user, permission, token, isLocal) {
    return (user === "admin" || permission) && (token === "valid" || isLocal);
}

// This function finds the first non-empty string
// Instructions: Return the first string that has length > 0
function findFirstNonEmptyString(str1, str2, str3) {
    return str1 || str2 || str3;
}

module.exports = {
    areBothPositive,
    isEitherEven,
    checkAccessRights,
    findFirstNonEmptyString
};
