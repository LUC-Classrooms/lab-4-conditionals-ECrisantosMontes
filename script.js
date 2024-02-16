var h, e;


function setup() {
  createCanvas(320, 240);
  h = width/2;
  e = 100;
}

function draw() {
  background(1);
  stroke(255, 10, 130);
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(255, 215, 235);
    h = width/4;
    e = 50;
  }
  else { 
    // otherwise do this:
    stroke(255, 215, 235);
    fill(255, 10, 130);
    h = width/2;
    e = 100;
  }
  ellipse(h, height/2, e, 100);
}
