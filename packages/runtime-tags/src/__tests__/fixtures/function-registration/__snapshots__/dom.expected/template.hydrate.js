// size: 86 (min) 83 (brotli)
function updateText(ev) {
  ev.target.textContent = "after";
}
(_$.effect("a0", ($scope) => _$.on($scope[2], "click", updateText)), init());
