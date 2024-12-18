// This function creates a person object with given name and age
// Instructions: Return an object with name and age properties
// Input: name = "John", age = 25
// Output: result = {name: "John", age: 25}
function createPerson(name, age) {
    return {name: name, age: age};
function createPerson() {

}

// This function gets a property value from an object
// Instructions: Return the value of the specified property
// Input: object = {name: "John", age: 25}, property = "name"
// Output: result = "John"
function getProperty(object, property) {
    return object[property];
}

// This function sets a property value in an object
// Instructions: Return a new object with the property set
// Input: name = "John", value = 25
// Output: result = {name: "John"}
function setProperty(name, value) {
    return {[name]: value};
}

// This function checks if two objects have the same property value
// Instructions: Return true if both objects have same value for specified property
// Input: object1 = {name: "John"}, object2 = {name: "John"}, property = "name"
// Output: result = true
function compareProperty(object1, object2, property) {
    return object1[property] === object2[property];
}

module.exports = {
    createPerson,
    getProperty,
    setProperty,
    compareProperty
};





