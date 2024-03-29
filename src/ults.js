// Importing constants module
const c = require("./constant");

// Function to parse input array and extract source and target coordinates
const parseInput = (inputArray) => {
    // Extracting source coordinates from the first element of inputArray
    const source = inputArray[c.zero].split(c.space);
    // Extracting target coordinates from the second element of inputArray
    const target = inputArray[c.one].split(c.space);

    // Creating source object with x, y coordinates, and direction
    const sourceObj = {
        x: parseInt(source[c.one]), // Parsing x coordinate to integer
        y: parseInt(source[c.two]), // Parsing y coordinate to integer
        direction: source[c.three], // Assigning direction
    };

    // Creating target object with x, y coordinates
    const targetObj = {
        x: parseInt(target[c.one]), // Parsing x coordinate to integer
        y: parseInt(target[c.two]), // Parsing y coordinate to integer
    };

    // Returning an object containing source and target objects
    return {
        source: sourceObj,
        target: targetObj,
    };
};

// Exporting the parseInput function for use in other modules
module.exports.parseInput = parseInput;
