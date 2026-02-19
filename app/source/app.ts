const fs = require('fs')
const path = require('path')

interface Point{
  x: number;
  y: number
}
interface Result{
  in: number;
  all: number;
}

let result : Result = {
    in: 0,
    all: 0
}

function calculatePi(result: Result, accuracy: number): {accuracy: number, pi: number} {
  const pi: number= result.all === 0 ? 0 : 4 * (result.in / result.all)
  return {
    accuracy: accuracy,
    pi: pi
  }
}


function generatePoint(accuracy: number): void{
  // const newAccuracy: number = Math.pow(accuracy, -1)
    
    
  for (let i = 1; i <= accuracy; i++) {
    const point: Point = {
      x: Math.random(),
      y: Math.random()
    }
    
    if (point.x * point.x + point.y * point.y <= 1)
      {
            result.all++
            result.in++
        }
    else{
            result.all++
    }
  }
}

function resetResults () : void {
    result = {
        in: 0,
        all: 0
    }
}

function saveResultsToFile(result: {accuracy: number, pi: number}): void{
    fs.writeFileSync(path.join(__dirname, '../result.txt'), JSON.stringify(result) + "\n", {flag: 'a'})
}

function run(accuracy: number): void {
    // const newAccuracy = Math.pow(accuracy, -1)
    for (let i = accuracy; i<=accuracy; i++) {
        generatePoint(i)
        saveResultsToFile(calculatePi(result, i))
        resetResults()
    }
}

// run(1000000)
run(10000000000)