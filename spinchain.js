function noIcon(x, y, r){ return; }

function verticalArrow(x, y, r){
  line(x, y+r, x, y-r);
  line(x, y-r, x-r/4, y-3*r/4);
  line(x, y-r, x+r/4, y-3*r/4);
}

function verticalDoubleArrow(x, y, r){
  line(x, y+r, x, y-r);
  line(x, y+r, x-r/4, y+3*r/4);
  line(x, y+r, x+r/4, y+3*r/4);
  line(x, y-r, x-r/4, y-3*r/4);
  line(x, y-r, x+r/4, y-3*r/4);
}

function verticalWideDoubleArrow(x, y, r){
  line(x-4, y+r-3, x-4, y-r+3);
  line(x+4, y+r-3, x+4, y-r+3);
  line(x, y+r+2, x-r/4, y+3*r/4);
  line(x, y+r+2, x+r/4, y+3*r/4);
  line(x, y-r-2, x-r/4, y-3*r/4);
  line(x, y-r-2, x+r/4, y-3*r/4);
}

function Spin(x, y, r, icon = noIcon){
  this.x = x;
  this.y = y;
  this.r = r;
  this.icon = icon
  this.renderSpin = function(){
    stroke(0);
    strokeWeight(3);
    ellipse(this.x, this.y, this.r, this.r);
    this.icon(this.x, this.y, this.r);
  }
}

function Chain(spin_array, w, h){
  let none = '';
  let vertical_arrow = 'va';
  let vertical_double_arrow = 'vda';
  let vertical_wide_double_arrow = 'vwda';
  let n = spin_array.length
  let dx = w/n
  let ofs = dx/2;
  this.spins = [];
  this.N = n;
  this.w = w;
  this.h = h;
  this.ofs = ofs
  for (let i = 0; i < this.N; i++){
    switch(spin_array[i]) {
      case none:
        this.spins.push(new Spin(i*dx+ofs, h/2, w/(2*this.N), noIcon));
        break;
      case vertical_arrow:
        this.spins.push(new Spin(i*dx+ofs, h/2, w/(2*this.N), verticalArrow));
        break;
      case vertical_double_arrow:
        this.spins.push(new Spin(i*dx+ofs, h/2, w/(2*this.N), verticalDoubleArrow));
        break;
      case vertical_wide_double_arrow:
        this.spins.push(new Spin(i*dx+ofs, h/2, w/(2*this.N), verticalWideDoubleArrow));
        break;
      default:
        this.spins.push(new Spin(i*dx+ofs, h/2, w/(2*this.N), noIcon));
        break;
    }
  }
  this.renderChain = function(){
    for (let spin of this.spins){
      spin.renderSpin();
    }
    let r = this.w/(4*this.N);
    let y = this.h/2;
    let dx = this.w/this.N;
    for (let i = 0; i < this.N-1; i++){
      let x = i*dx;
      line(x+r+this.ofs, y, x+dx-r+this.ofs, y);
    }
  }
}
