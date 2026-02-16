const areaFil = require('./area.js')


const quarterCircle: Point[] = areaFil.area;
interface Point {
  x: number;
  y: number;
}

interface Result {
  in: number;
  all: number;
}

let results: Result = {
  in: 0,
  all: 0
};

function generatePoints(accuracy:number): void {
  const newAccuracy:number = Math.pow(accuracy, -1);
  for (let i: number = 1; i <= newAccuracy; i++) {
    const cosine: number = Math.random();
    const sine: number = Math.random();
    
    results.all++;
    
    // Check if point is in quarter circle: x² + y² ≤ 1
    if (cosine * cosine + sine * sine <= 1) {
      results.in++;
    }
  }
}


module.exports = { results, generatePoints };
