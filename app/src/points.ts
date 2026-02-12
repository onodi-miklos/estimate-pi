let { accuracy } = require("./app.js");
const { area } = require("./area.js");

interface Point {
  x: number;
  y: number;
}
interface Result{
  in: number,
  out: number
}

let results: Result = {
  in: 0,
  out: 0
}

function generatePoints():void{}

module.exports = {results, generatePoints}
