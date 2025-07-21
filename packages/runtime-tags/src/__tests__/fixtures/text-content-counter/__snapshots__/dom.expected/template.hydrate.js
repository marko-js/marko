// size: 143 (min) 104 (brotli)
const $clickCount_effect = _$.effect("a0", ($scope, { 1: clickCount }) => {
    ((document.getElementById("button").textContent = clickCount),
      _$.on($scope[0], "click", function () {
        $clickCount($scope, ++clickCount);
      }));
  }),
  $clickCount = _$.state(1, $clickCount_effect);
init();
