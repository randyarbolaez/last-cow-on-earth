var canWidth = 1200;
var canHeight = 1200;
var canvasCow = document.getElementById('canvas-cow');
canvasCow.width = canWidth;
canvasCow.height = canHeight;
var ctx2 = canvasCow.getContext('2d');

var x = 0;
var y = 300;

var srcX;
var srcY;

var sheetWidth = 2020;
var sheetHeight = 571;

var frameCount = 5;

var cols = 5;
var rows = 2;

var width = sheetWidth / cols;
var height = sheetHeight / rows;

var currentFrame = 0;

var character = new Image();
character.src = './images/sprites/sprite-cow-copy.png';

function updateFrame() {
  currentFrame = ++currentFrame % cols;
  srcX = currentFrame * width;
  srcY = 0;
  ctx2.clearRect(x, y, width, height);
}

function drawImage() {
  updateFrame();
  ctx2.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}

setInterval(function() {
  drawImage();
}, 100);
