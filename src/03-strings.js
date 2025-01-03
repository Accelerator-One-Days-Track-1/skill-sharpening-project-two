// This function demonstrates string concatenation
// Instructions: Join the first and second string with a space in between
// Input: str1 = "Hello", str2 = "World"
// Output: result = "Hello World"
function joinStrings(str1, str2) {
    return str1 + str2;
}

// This function demonstrates string methods
// Instructions: Convert the input string to all uppercase letters
// Input: str = "hello"
// Output: result = "HELLO"
function convertToUpperCase(str) {
    return str.toUpperCas();
}

// This function demonstrates string slicing
// Instructions: Extract characters from start index to end index (inclusive)
// Input: str = "JavaScript", startIndex = 1, endIndex = 3
// Output: result = "ava"
function sliceString(str, startIndex, endIndex) {
    return str.slice(startIndex, endIndex);
}

// This function demonstrates string searching
// Instructions: Find if the search string exists in the main string
// Input: mainStr = "Hello World", searchStr = "World"
// Output: result = true
function containsSubstring(mainStr, searchStr) {
    return mainStr.includes(searchStr);
}

// This function demonstrates string replacement
// Instructions: Replace all occurrences of oldChar with newChar
// Input: str = "hello hello", oldChar = "l", newChar = "w"
// Output: result = "hewwo hewwo"
function replaceCharacters(str, oldChar, newChar) {
    return str.replace(oldChar, newChar);
}

module.exports = {
    joinStrings,
    convertToUpperCase,
    sliceString,
    containsSubstring,
    replaceCharacters
};
