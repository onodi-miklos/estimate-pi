const acc = require("./app.js");

function gradiensToRadians(angle: number): number {
  let degree: number = angle * 0.9;
  let radian: number = degree * (Math.PI / 180);
  return radian;
}
function radiansToGradiens(angle: number): number {
  let degree: number = angle / (Math.PI / 180);
  let gradiens: number = degree / 0.9;
  return gradiens;
}

interface Point {
  x: number;
  y: number;
}

function addArea(): void {
  if (acc.areaSecurity === false) {
    acc.areaSecurity = true;
    for (let ang: number = 0; ang <= 100; ang += acc.accuracy) {
      const cosine: number = (Number(Math.cos(gradiensToRadians(ang)).toFixed(Math.pow(acc.accuracy, -1))));
      const sine: number = (Number(Math.sin(gradiensToRadians(ang)).toFixed(Math.pow(acc.accuracy, -1))));

      const coordinates: Point = {x: cosine, y: sine};
      // console.log(coordinates)

      acc.area.push(coordinates)
    }
  } else {
    console.error("Area already added!");
  }
  // console.log(acc.area)
  console.log(acc.area.length)
}
addArea();

module.exports = { addArea, gradiensToRadians, radiansToGradiens };
