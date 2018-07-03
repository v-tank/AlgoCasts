function bouncingBall(h, bounce, windowHeight) {
  // how many times will she see the ball pass from the window?
  // Conditions: h > 0;  window < h; 0 < bounce < 1; else return -1

  var counter = 1;

  if ((h > 0) && (windowHeight < h) && (bounce > 0 && bounce < 1)) {
    h = h * bounce;

    while (h >= windowHeight) {
      counter += 2;
      h *= bounce;
    }

    return counter;
  } else {
    return -1
  }
}

let result = bouncingBall(30.0, 0.66, 1.5);
console.log(result);