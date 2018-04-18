var ufoCanWidth = 2000;
var ufoCanHeight = 2000;
var canvasUfo = document.getElementById('canvas-ufo-2');
canvasUfoTwo.width = ufoCanWidthTwo;
canvasUfoTwo.height = ufoCanHeightTwo;
var ctx4 = canvasUfo.getContext('2d');

var ufoXTwo = 800;
var ufoYTwo = 10;

var ufoSrcXTwo;
var ufoSrcYTwo;

function moveUpTwo() {
  y -= 12;
}

function moveDownTwo() {
  y += 12;
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      moveUp();
      break;
    case 40:
      moveDown();
      break;
  }
};

var ufoSheetWidthTwo = 1200;
var ufoSheetHeightTwo = 502;

var ufoFrameCountTwo = 5;

var ufoColsTwo = 5;
var ufoRowsTwo = 4;

var ufoWidthTwo = ufoSheetWidthTwo / ufoColsTwo;
var ufoHeightTwo = ufoSheetHeightTwo / ufoRowsTwo;

var ufoCurrentFrameTwo = 0;

var ufoCharacterTwo = new Image();
ufoCharacter.srcTwo = './images/sprites/sprite-ufo.png';

function updateFrameUfoTwo() {
  ufoCurrentFrameTwo = ++ufoCurrentFrameTwo % ufoColsTwo;
  ufoSrcXTwo = ufoCurrentFrameTwo * ufoWidthTwo;
  ufoSrcYTwo = 0;
  ctx4.clearRect(ufoXTwo, ufoYTwo, ufoWidthTwo, ufoHeightTwo);
}

function drawImageUfoTwo() {
  updateFrameUfoTwo();
  ctx3.drawImageTwo(
    ufoCharacterTwo,
    ufoSrcXTwo,
    ufoSrcYTwo,
    ufoWidthTwo,
    ufoHeightTwo,
    ufoXTwo,
    ufoYTwo,
    ufoWidthTwo,
    ufoHeightTwo
  );
}

setIntervalTwo(function() {
  drawImageUfoTwo();
}, 100);
