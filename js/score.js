function score() {
  var timer = 0;

  var interval = setInterval(test, 1000);

  function test() {
    timer++;
  }
  ctx.fillText('Survival Time: ' + interval, 750, 100);
  ctx.fillStyle = 'black';
  ctx.font = '50px Sans Serif';
}
