const fs = require('fs')
const path = require('path')

interface Result{
    accuracy: number;
    e: number
}

let results = Result[]

function calculate(accuracy: number):number{
    const newAccuracy = Math.pow(accuracy, -1)
    
    for (let i: number = 1; i <= accuracy; i++){
        const result: Result = {
            accuracy: i,
            e: Math.pow((1 + (1/i)), i)
        }
        
        results.push(result)
    }
}

fs.writeFileSync(path.join(_dirname, ../result.txt), results)
