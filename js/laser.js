setInterval(updateCanvasLaser, 10);
var frames = 0;

var laserBeam = [];

function Component(widthvalue, heightvalue, xvalue, yvalue) {
  this.width = widthvalue;
  this.height = heightvalue;
  this.x = xvalue;
  this.y = 110;
  this.speedX = 0;
  this.speedY = 0;
  this.update = function() {
    ctx3.fillStyle = 'red';
    ctx3.fillRect(this.x, this.y, this.width, this.height);
  };

  // next 4 lines check the position of the obstacle
  this.left = function() {
    return this.x;
  };
  this.right = function() {
    return this.x + this.width;
  };
  this.top = function() {
    return this.y;
  };
  this.bottom = function() {
    return this.y + this.height;
  };

  this.crashWith = function(someLaser) {
    return !(
      y < someLaser.bottom() ||
      x + 40 < someLaser.left() ||
      x + 40 > someLaser.right() ||
      y > someLaser.top()
    );
  };

  this.shootPlayer = function() {
    if (this.x < x + width && this.x > x && this.y < y + height && this.y > y) {
      gameOver();
    }
  };
}

function gameOver() {
  setTimeout(function() {
    window.location.replace('gameover.html');
  }, 10);
}

function updateCanvasLaser() {
  ctx3.clearRect(0, 0, 1200, 720);
  drawImageUfo();
  frames++;

  if (frames % 25 === 1) {
    wallX = ufoX + 140;
    wallX = ufoX + 140;
    wallWidth = 13;
    wallHeight = 100;
    laserBeam.push(new Component(wallWidth, wallHeight, wallX, 0));
  }

  for (var i = 0; i < laserBeam.length; i++) {
    ctx3.clearRect(
      laserBeam[i].x,
      laserBeam[i].y,
      laserBeam[i].width,
      laserBeam[i].height
    );
    laserBeam[i].y += 10;
    laserBeam[i].update();

    if (laserBeam[i].crashWith(laserBeam[i]) === true) {
      laserBeam = [];
    }

    laserBeam[i].shootPlayer();

    if (laserBeam[i].y > 600) {
      laserBeam.splice(i, 1);
    }
  }
}
