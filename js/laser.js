window.onload = function() {
  // ====================================================================
  var laserCanvas = document.getElementById('canvas-laser');
  laserCanvas.width = 1280;
  laserCanvas.height = 720;
  var ctx4 = laserCanvas.getContext('2d');

  // ======================CHANGES-MADE====================================
  setInterval(updateCanvas, 50);
  var frames = 0;
  // ====================================================================

  var myObstacles = [];

  for (var i = 0; i < myObstacles.length; i++) {
    myObstacles[i].update();
  }

  function Component(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = 110;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
      ctx4.fillStyle = 'red';
      ctx4.fillRect(this.x, this.y, this.width, this.height);
    };
    // function to draw the element in its new position
    // this.newPos = function() {
    //   this.x = +this.speedX;
    //   this.y = +this.speedY;
    // };
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

    this.crashWith = function(obstacle) {
      return !(
        character.y > obstacle.bottom() ||
        character.x + 40 < obstacle.left() ||
        character.x + 40 > obstacle.right()
      );
    };
  }

  function updateCanvas() {
    ctx4.clearRect(0, 0, 1200, 720);

    frames++;

    if (frames % 40 === 1) {
      wallX = ufoX + 140;
      wallX = ufoX + 140;
      wallWidth = 13;
      wallHeight = 300;
      myObstacles.push(new Component(wallWidth, wallHeight, wallX, 0));
    }

    for (var i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y += 10;
      myObstacles[i].update();
      if (myObstacles[i].crashWith(myObstacles[i]) === true) {
        alert('loser');
        myObstacles = [];
        frames = 0;
      }
      if (myObstacles[i].y > 600) {
        myObstacles.splice(i, 1);
      }
    }
  }
};
