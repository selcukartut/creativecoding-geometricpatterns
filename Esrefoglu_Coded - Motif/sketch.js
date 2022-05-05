let r = 50;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  stroke(0);
  noLoop();
}

function draw() {
  background(255);
  push();
  translate(width * 0.5, height * 0.5);
  for (let i = 0; i < 6; i++) {
    push();
    rotate(i*60);
    translate(cos(30) * r * 2, 0);
    beginShape();
    let x0 = -1 * cos(30) * r;
    let y0 = -1 * sin(30) * r;
    vertex(x0, -y0);
    let x1 = cos(30) * r;
    let y1 = sin(30) * r;
    vertex(x1, -y1);
    endShape();
    beginShape();
    let x2 = -1 * cos(30) * r;
    let y2 = sin(30) * r;
    vertex(x2, -y2);
    let x3 = cos(30) * r;
    let y3 = -1 * sin(30) * r;
    vertex(x3, -y3);
    endShape();
    pop();
  }
  pop();
}
