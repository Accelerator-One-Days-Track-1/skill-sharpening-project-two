const {
    joinStrings,
    convertToUpperCase,
    sliceString,
    containsSubstring,
    replaceCharacters
} = require('../src/03-strings');

describe('Strings', () => {
    test('joinStrings concatenates two strings with a space between', () => {
        expect(joinStrings("Hello", "World")).toBe("Hello World");
        expect(joinStrings("Good", "Morning")).toBe("Good Morning");
        expect(joinStrings("Test", "Case")).toBe("Test Case");
    });

    test('convertToUpperCase converts string to uppercase', () => {
        expect(convertToUpperCase("hello")).toBe("HELLO");
        expect(convertToUpperCase("world")).toBe("WORLD");
        expect(convertToUpperCase("test")).toBe("TEST");
    });

    test('sliceString extracts characters from start to end index inclusive', () => {
        expect(sliceString("JavaScript", 1, 3)).toBe("ava");
        expect(sliceString("Testing", 2, 4)).toBe("sti");
        expect(sliceString("Hello", 0, 2)).toBe("Hel");
    });

    test('containsSubstring checks if search string exists in main string', () => {
        expect(containsSubstring("Hello World", "World")).toBe(true);
        expect(containsSubstring("Testing String", "ing")).toBe(true);
        expect(containsSubstring("JavaScript", "Python")).toBe(false);
    });

    test('replaceCharacters replaces all occurrences of oldChar with newChar', () => {
        expect(replaceCharacters("hello hello", "l", "w")).toBe("hewwo hewwo");
        expect(replaceCharacters("test case", "t", "d")).toBe("desd case");
        expect(replaceCharacters("banana", "a", "o")).toBe("bonono");
    });
});

