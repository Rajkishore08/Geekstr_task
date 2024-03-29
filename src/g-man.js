// Importing constants and utility functions
const c = require("./constant");
const utils = require("./ults");

// Defining the GMAN class
class GMAN {
  // Initializing properties of the GMAN class
  sourceLocation = { x: c.zero, y: c.zero }; // Initial source location
  targetLocation = { x: c.zero, y: c.zero }; // Initial target location
  totalPower = c.TWO_HUNDRED; // Total power available to G-Man
  turns = c.zero; // Total turns taken by G-Man

  // Constructor to initialize GMAN object with source and target locations
  constructor(source, target) {
    this.sourceLocation = source;
    this.targetLocation = target;
  }

  // Function to calculate the number of moves needed to reach the target
  calculateMoves = () => {
    return (
      Math.abs(this.sourceLocation.x - this.targetLocation.x) +
      Math.abs(this.sourceLocation.y - this.targetLocation.y)
    );
  };

  // Function to check if a turn is required in X direction
  isTurnReqInXDir = (dir) => {
    if (dir === c.north || dir === c.south)
      if (this.sourceLocation.x != this.targetLocation.x) this.turns++;
      else if (this.sourceLocation.y != this.targetLocation.y) this.turns++;
  };

  // Function to check if a turn is required in Y direction
  isTurnReqInYDir = (dir) => {
    if (dir === c.east || dir === c.west)
      if (this.sourceLocation.y != this.targetLocation.y) this.turns++;
      else if (this.sourceLocation.x != this.targetLocation.x) this.turns++;
  };

  // Function to calculate the total number of turns required
  calculateTurns = (dir) => {
    this.isTurnReqInXDir(dir);
    this.isTurnReqInYDir(dir);
    return this.turns;
  };

  // Function to calculate the remaining power after taking moves and turns
  calculatePower = (dir) => {
    const distance = this.calculateMoves(); // Calculate total distance to the target
    const turns = this.calculateTurns(dir); // Calculate total turns required
    // Calculate remaining power after subtracting power loss due to moves and turns
    return this.totalPower - ((distance * c.POWERLOSSBYMOVE) + ((turns + c.one) * c.POWERLOSSBYTURN));
  };
}

// Function to get remaining power of G-Man based on input array
const getPowerOfGMan = (inputArray) => {
  const { source, target } = utils.parseInput(inputArray); // Parse input array to get source and target locations
  const gman = new GMAN(source, target); // Create a new instance of GMAN class
  return gman.calculatePower(source.direction); // Calculate remaining power based on source direction
};

// Exporting the function to get remaining power of G-Man
module.exports.getPowerOfGMan = getPowerOfGMan;
