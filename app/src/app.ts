// ESTIMATE PI

const fs = require("fs");
const pointsFile = require("./points.js");
const areaFile = require("./area.js");

let accuracy: number = 0.1;

interface Point {
  x: number;
  y: number;
}

interface Result {
  in: number;
  out: number;
}


areaFile.addArea(accuracy)
console.log(areaFile.area.length)

// function calculatePi(args: Result): number {

// }

// function saveResultsToFile(): void {

// }

module.exports = { accuracy };
