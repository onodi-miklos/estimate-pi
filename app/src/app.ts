// ESTIMATE PI

const {addArea} = require('./area.js')
const {results, generatePoints} = require('./points.js')

let accuracy: number;
accuracy = 0.1;

interface Result{
  in: number,
  out: number
}

function calculatePi(args:Result):number{}
function saveResultsToFile():void{}

module.exports = { accuracy };
