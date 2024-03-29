// Importing the 'fs' module to work with the file system
const fs = require("fs");

var gMan = require("./src/gMan");

// Extracting the filename from command line arguments
const filename = process.argv[2];

// Reading the contents of the file asynchronously
fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err; // Throw an error if file reading fails

  // Splitting the data into an array of lines
  var inputArray = data.toString().split("\n");

  // Calculating G-Man's power using the imported 'gMan' module
  console.log("POWER ", gMan.getPowerOfGMan(inputArray));
});
