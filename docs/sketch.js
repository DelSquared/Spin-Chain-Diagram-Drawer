var h = 200;
var w = 4*h;
var thc = h*h*h/100;
var n = 5

var s = [];
s.push('vwda');
for (let i = 0; i < n-1; i++){
  s.push('va');
}

function setup() {
  createCanvas(w, h);
  background(255);
  smooth();
  stroke(0);
  strokeWeight(thc);
  noFill();

  chain = new Chain(s, w, h);
  chain.renderChain();


}

function draw(){
  if (frameCount > 1){
    noLoop();
  }
}
