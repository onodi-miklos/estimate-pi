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

function calculatePi(result: Result): number{
  const pi: number= 4 * (result.in / result.all)
  return pi
}

let points: Point[] = []

function generatePoint(accuracy: number): void{
    const newAccuracy: number = Math.pow(accuracy, -1)
    
    
  for (let i = 1; i <= accuracy; i+= newAccuracy) {
    const point: Point = {
      x: Math.random().toFixed(accuracy)
      y: Math.random().toFixed(accuracy)
    }
    points.push(point)
    
    if (
        Math.pow(x, 2) + Math.pow(y, 2) <= 1
        ) {
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

function saveResultsToFile(result: Result): void{
    fs.writeFileSync(path.join(_dirname, '../results.txt', result\n, {flag: 'a'}))
}

function run(accuracy: number): void {
    const newAccuracy = Math.pow(accuracy, -1)
    for (let i = 1; i<=accuracy;
    
    // iteration steps
    i++
    
    ) {
    generatePoint(i)
    saveResultsToFile(calculatePi(result))
    resetResults()
}}
