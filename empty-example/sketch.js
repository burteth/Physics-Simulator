



const SCREEN_HEIGHT = 400;
const SCREEN_WIDTH = 800;

var currentObjects = [];
function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  background(0);
}

function draw() {

  background(0);

  for (let i = 0; i < currentObjects.length; i++) {
    currentObjects[i].update();
  }

}

function mousePressed() {
  currentObjects.push(new Ball(mouseX, mouseY))
}

const DRAG_COEFFICENT = .99;
// Ball class
class Ball {
  constructor(xCord, yCord) {

    this.x = xCord;
    this.y = yCord;

    this.xVel = 0;
    this.yVel = 0;

    this.xAcc = 0;
    this.yAcc = 0;

    this.diameter = random(10, 30);
    
    this.mass = ;

    
    
    
  }

  update() {

    this.x += this.xVel;
    this.y += this.yVel;
    
    this.xVel += (this.xAcc) * DRAG_COEFFICENT;
    this.yVel += (this.yAcc + 1) * DRAG_COEFFICENT;

    if (this.y >= SCREEN_HEIGHT || this.y <= 0){
      this.yVel *= -.9;
    }
    else if (this.x >= SCREEN_WIDTH || this.x <= 0){
      this.xVel *= -.9;
    }

    this.draw()

  }

  draw() {
    fill(200);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}