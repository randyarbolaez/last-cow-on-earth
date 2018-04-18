var ufoCanWidth = 2000;
var ufoCanHeight = 2000;
var canvasUfo = document.getElementById('canvas-ufo');
canvasUfo.width = ufoCanWidth;
canvasUfo.height = ufoCanHeight;
var ctx3 = canvasUfo.getContext('2d');

var ufoX = 200;
var ufoY = 30;

var ufoSrcX;
var ufoSrcY;

function moveUp() {
  y -= 12;
}

function moveDown() {
  y += 12;
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 87:
      moveUp();
      break;
    case 83:
      moveDown();
      break;
  }
};

var ufoSheetWidth = 2240;
var ufoSheetHeight = 377;

// var ufoFrameCount = 8;

var ufoCols = 8;
var ufoRows = 3;

var ufoWidth = ufoSheetWidth / ufoCols;
var ufoHeight = ufoSheetHeight / ufoRows;

var ufoCurrentFrame = 0;

var ufoCharacter = new Image();
ufoCharacter.src = './images/sprites/sprite-ufo-background.png';

function updateFrameUfo() {
  ufoCurrentFrame = ++ufoCurrentFrame % ufoCols;
  ufoSrcX = ufoCurrentFrame * ufoWidth;
  ctx3.clearRect(ufoX, ufoY, ufoWidth, ufoHeight);
  ufoSrcY = 0;
}

function drawImageUfo() {
  updateFrameUfo();
  ctx3.drawImage(
    ufoCharacter,
    ufoSrcX,
    ufoSrcY,
    ufoWidth,
    ufoHeight,
    ufoX,
    ufoY,
    ufoWidth,
    ufoHeight
  );
}

setInterval(function() {
  drawImageUfo();
}, 100);
