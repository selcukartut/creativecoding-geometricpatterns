// Motif class
class Motif {
  constructor(r) {
    this.r = r;
  }

  display() {
    for (let i = 0; i < 6; i++) {
      push();
      rotate(i*60);
      translate(cos(30) * this.r * 2, 0);
      beginShape();
      let x0 = -1 * cos(30) * this.r;
      let y0 = -1 * sin(30) * this.r;
      vertex(x0, -y0);
      let x1 = cos(30) * this.r;
      let y1 = sin(30) * this.r;
      vertex(x1, -y1);
      endShape();
      beginShape();
      let x2 = -1 * cos(30) * this.r;
      let y2 = sin(30) * this.r;
      vertex(x2, -y2);
      let x3 = cos(30) * this.r;
      let y3 = -1 * sin(30) * this.r;
      vertex(x3, -y3);
      endShape();
      pop();
    }
  }
}



let radius = 20;
let motives = []; // Declare array
let nRow;
let nCol;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  stroke(0);
  nRow = 10;
  nCol = 10;
  for (let i = 0; i < nRow * nCol; i++) {
    motives.push(new Motif(radius));
  }
  noLoop();
}

function draw() {
  background(255);
  for (let r = 0; r < nRow; r++) {
    for (let c = 0; c < nCol; c++) {
      push();
      translate(6 * radius * cos(30) * c,  5 * radius * r );
      motives[r+c*nRow].display();
      pop();
    }
  }
}
