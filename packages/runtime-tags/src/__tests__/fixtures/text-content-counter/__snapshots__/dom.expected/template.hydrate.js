// size: 144 (min) 105 (brotli)
const $clickCount__script = _._script("a0", ($scope, { 1: clickCount }) => {
    ((document.getElementById("button").textContent = clickCount),
      _._on($scope[0], "click", function () {
        $clickCount($scope, ++clickCount);
      }));
  }),
  $clickCount = _._let(1, $clickCount__script);
init();
