const accur = require("./app.js");

interface Point {
  x: number;
  y: number;
}

interface Result {
  in: number;
  out: number;
}

let results: Result = {
  in: 0,
  out: 0,
};

function generatePoints(): void {
  // Implementation
}

module.exports = { results, generatePoints };
