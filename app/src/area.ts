const acc = require('./app.js')
const utils = require('./utility.js')

interface Point {
  x: number;
  y: number;
}


let areaSecurity: boolean = false;
let area: Point[] = [];

function addArea(accuracy: number): void {
  if (areaSecurity === false) {
    areaSecurity = true;
    for (let ang: number = 0; ang <= 100; ang += accuracy) {
      const cosine: number = (Number(Math.cos(utils.gradiensToRadians(ang)).toFixed(Math.pow(accuracy, -1))));
      const sine: number = (Number(Math.sin(utils.gradiensToRadians(ang)).toFixed(Math.pow(accuracy, -1))));

      const coordinates: Point = {x: cosine, y: sine};
      console.log(coordinates)

      area.push(coordinates)
    }
  } else {
    console.error("Area already added!");
  }
}

module.exports = { addArea, area };
