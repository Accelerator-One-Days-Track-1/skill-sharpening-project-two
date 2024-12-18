const {
    createPerson,
    getProperty,
    setProperty,
    compareProperty
} = require('../src/09-object-basics');

describe('Object Basics', () => {
    test('createPerson creates object with name and age properties', () => {
        expect(createPerson("John", 25)).toEqual({name: "John", age: 25});
        expect(createPerson("Jane", 30)).toEqual({name: "Jane", age: 30});
        expect(createPerson("Bob", 45)).toEqual({name: "Bob", age: 45});
        expect(createPerson("Alice", 35)).toEqual({name: "Alice", age: 35});
    });

    test('getProperty returns value of specified property', () => {
        expect(getProperty({name: "John", age: 25}, "name")).toBe("John");
        expect(getProperty({name: "Jane", age: 30}, "age")).toBe(30);
        expect(getProperty({city: "New York"}, "city")).toBe("New York");
        expect(getProperty({isStudent: true}, "isStudent")).toBe(true);
    });

    test('setProperty creates object with specified property and value', () => {
        expect(setProperty("name", "John")).toEqual({name: "John"});
        expect(setProperty("age", 25)).toEqual({age: 25});
        expect(setProperty("city", "New York")).toEqual({city: "New York"});
        expect(setProperty("isStudent", true)).toEqual({isStudent: true});
    });

    test('compareProperty checks if two objects have same property value', () => {
        expect(compareProperty({name: "John"}, {name: "John"}, "name")).toBe(true);
        expect(compareProperty({age: 25}, {age: 30}, "age")).toBe(false);
        expect(compareProperty({city: "New York"}, {city: "New York"}, "city")).toBe(true);
        expect(compareProperty({isStudent: true}, {isStudent: false}, "isStudent")).toBe(false);
    });
});
