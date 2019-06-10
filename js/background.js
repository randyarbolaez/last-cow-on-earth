var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 720;

let backgroundImage = new Image();
backgroundImage.src = './Images/background.jpg';

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

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  window.requestAnimationFrame(updateCanvas);
}

backgroundImage.onload = updateCanvas();
