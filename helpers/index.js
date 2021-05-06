function cos(ang) {
  return Math.cos(ang * (Math.PI / 180.0));
}

function sin(ang) {
  return Math.sin(ang * (Math.PI / 180.0));
}

function getDistance(x1, y1, x2, y2) {
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.sqrt(a * a + b * b);
}

export { cos, sin, getDistance };
