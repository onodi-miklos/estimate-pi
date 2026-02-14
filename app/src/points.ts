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

function generatePoints(accuracy:number): void {
  const newAccuracy:number = Math.pow(accuracy, -1);
  for (let i: number = 1; i <= newAccuracy; i++) {
    const cosine: number = Number(Math.random().toFixed(newAccuracy))
    const sine: number = Number(Math.random().toFixed(newAccuracy))

    const coordinates: Point = {x: cosine, y: sine}

    
  }
}


module.exports = { results, generatePoints };
