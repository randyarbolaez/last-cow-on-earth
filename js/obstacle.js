//======================================================
var Obstacle = function(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

Obstacle.prototype.draw = function() {
  ctx.fillRect(this.x, this.y, this.width, this.height);
};
// =============================================================

var currentGame = [];

// PLAYER CANT MOVE MOVE PAST THE COORDINATES

var leftWall = new Obstacle(0, 0, 30, 720);
var rightWall = new Obstacle(1250, 0, 30, 720);

// PLAYER CANT MOVE MOVE PAST THE COORDINATES

currentGame.push(leftWall, rightWall);

// CHARACTER CANT MOVE PAST THE X-CORDINATE
// =============================================================

function hitObstacle(futureX, futureY) {
  var canIMove = true;
  currentGame.forEach(function(key) {
    if (
      futureX >= key.x &&
      futureX <= key.x + key.width &&
      (futureY >= key.y && futureY <= key.y + key.height)
    ) {
      canIMove = false;
      console.log("ouch, there's an invisible wall!!!!!");
    }
  });
  return canIMove;
}

//===================================================================
// CHARACTER CANT MOVE PAST THE X-CORDINATE

document.onkeydown = function(event) {
  if (event.which === 37 || event.which === 39) {
    event.preventDefault();
  }

  var directionCode = event.which;

  switch (directionCode) {
    case 37:
      if (hitObstacle(x - 30, y)) {
        moveLeft();
      }
      break;

    case 39:
      if (hitObstacle(x + 120, y)) {
        moveRight();
      }
      break;

    default:
      console.log('oops, wrong key');
      break;
  } // End Switch
}; // END document.onkeydown
