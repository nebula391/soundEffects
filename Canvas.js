window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
  canvasApp();
}
function canvasSupport() {
  return modernizr.canvas;
}
function canvasApp() {
  if (!canvasSupport()) {
    return;
  } else {
    var theCanvas = document.getElementById('canvas');
    var context = theCanvas.getContext('2d');
  }
  drawScreen();

  function drawScreen() {
    context.fillStyle = '#33aaaa';
    context.fillRect(0, 0, 200, 200);
    context.fillStyle = '#000033';
    context.font = '20px _sans';
    context.textBaseline = 'top';
    context.fillText('Canvas!', 0, 0);
  }
}
