const fs = require('fs')
const path = require('path')

interface Result{
    accuracy: number;
    e: number
}

let results: Result[] =[]

function calculate(accuracy: number):void{
    // const newAccuracy = Math.pow(accuracy, -1)
    
    for (let i: number = accuracy; i <= accuracy; i++){
        const result: Result = {
            accuracy: i,
            e: Math.pow((1 + (1/i)), i)
        }
        
        results.push(result)
    }
}
calculate(10000000)

fs.writeFileSync(path.join(__dirname, "../result.txt"), JSON.stringify(results[results.length - 1], null, 2))