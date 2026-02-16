// ESTIMATE PI

const fs = require("fs");
const path = require('path')
const pointsFile = require("./points.js");
const areaFile = require("./area.js");

let accuracy: number = 0.1;

interface Point {
  x: number;
  y: number;
}

interface Result {
  in: number;
  all: number;
}


areaFile.addArea(accuracy)
const quarterCircleArea: Point[] = areaFile.area;

// function calculatePi(args: Result): number {

// }

function saveResultsToFile(): void {
  const filePath = path.join(__dirname, '../result.txt');

  fs.writeFileSync(filePath, JSON.stringify({quarterCircleLength: quarterCircleArea.length, quarterCircle:quarterCircleArea}))
}
saveResultsToFile()

module.exports = { accuracy };
