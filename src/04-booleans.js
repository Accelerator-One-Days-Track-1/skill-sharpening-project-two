// This function demonstrates boolean negation
// Instructions: Return true if input is false, false if input is true
// Input: value = true
// Output: result = false
function flipBoolean(value) {
    return !value;
}

// This function demonstrates boolean conversion
// Instructions: Convert any input value to its boolean equivalent
// Input: value = 0
// Output: result = false
function returnBooleanValue(value) {
    return Boolean(value);
}

// This function demonstrates strict equality comparison
// Instructions: Check if two values are strictly equal
// Input: value1 = 5, value2 = "5"
// Output: result = false
function checkStrictEquality(value1, value2) {
    return value1 === value2;
}

// This function demonstrates falsy value checking
// Instructions: Return true if the value is falsy, false otherwise
// Input: value = 0
// Output: result = true
function isFalsy(value) {
    return !value;
}

module.exports = {
    flipBoolean,
    returnBooleanValue,
    checkStrictEquality,
    isFalsy
};
