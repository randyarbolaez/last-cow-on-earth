var canWidth = 2000;
var canHeight = 2000;
var canvasCow = document.getElementById('canvas-cow');
canvasCow.width = canWidth;
canvasCow.height = canHeight;
var ctx2 = canvasCow.getContext('2d');

var x = 0;
var y = 500;

var srcX;
var srcY;

function moveLeft() {
  x -= 10;
}

function moveRight() {
  x += 10;
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
};

var sheetWidth = 864;
var sheetHeight = 280;

var frameCount = 8;

var cols = 8;
var rows = 2;

var width = sheetWidth / cols;
var height = sheetHeight / rows;

var currentFrame = 0;

var character = new Image();
character.src = './images/sprites/character.png';

function updateFrame() {
  ctx2.clearRect(x - 20, y, width + 100, height + 20);
  currentFrame = ++currentFrame % cols;
  srcX = currentFrame * width;
  srcY = 0;
}

function drawImage() {
  updateFrame();
  ctx2.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}

setInterval(function() {
  drawImage();
}, 100);
