var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = window.innerWidth;
var ch = canvas.height = window.innerHeight;
var el_Id = null;
var numCopos = 300;
var coposRy = [];
ctx.fillStyle = "white";

function Copo() {
  this.r = ~~(Math.random()*3 + 1);
  this.x = ~~(Math.random()*cw + 1);
  this.y = -this.r;
  this.vx = ~~(Math.random() * (15 - 5 + 1) + 5)/10 * (Math.random() < .5 ? 1 : -1);
  this.vy =  ~~(Math.random()*3 + 1);
}

Copo.prototype.dibujar = function(ctx) {

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  ctx.fill();

}

Copo.prototype.movimiento = function() {
  if (this.x >= cw + this.r ||
    this.x <= -this.r ||
    this.y >= ch + this.r
  ) {
    this.y = -this.r;
    this.x = ~~(Math.random()*cw + 1);
  } else {
    this.x += this.vx;
    this.y += this.vy;
  }
}

function AnimarCopos() {
  el_Id = window.requestAnimationFrame(AnimarCopos);
  if (coposRy.length < numCopos) {
    var copo = new Copo();
    coposRy.push(copo);
  }
  ctx.clearRect(0, 0, cw, ch);

  for (var i = 0; i < coposRy.length; i++) {
    coposRy[i].movimiento();
    coposRy[i].dibujar(ctx);
  }
}
el_Id = window.requestAnimationFrame(AnimarCopos);
