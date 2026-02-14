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

module.exports = { gradiensToRadians, radiansToGradiens }