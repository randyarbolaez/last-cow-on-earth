var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

canvas.width = 1280;
canvas.height = 720;

var backgroundImage = new Image();
backgroundImage.src = './images/background.jpg';

var background = {
  backgroundImage: backgroundImage,
  x: 0,
  speed: -2,

  draw: function() {
    ctx.drawImage(this.backgroundImage, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.backgroundImage, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(
        this.backgroundImage,
        this.x - this.backgroundImage.width,
        0
      );
    }
  },
};
// function score() {
//   ctx.fillText('Score: ', 1000, 100);
//   this.ctx.fillStyle = 'greenYellow';
//   this.ctx.font = '50px Sans Serif';
// }

function updateCanvas() {
  // background.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  background.draw();
  // score();

  window.requestAnimationFrame(updateCanvas);
  drawObstacle(); // located in Obstacle.js
}

//backgroundImage.onload = updateCanvas;
//================
backgroundImage.onload = function() {
  // var ptrn = ctx.createPattern(backgroundImage, 'repeat-x');
  // ctx.fillStyle = ptrn;
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  updateCanvas();
};
