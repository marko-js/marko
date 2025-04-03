// size: 239 (min) 162 (brotli)
const $y_effect = _$.effect("a1", ($scope, { 4: y }) =>
    _$.on($scope[0], "click", function () {
      $y($scope, y + 1);
    }),
  ),
  $y = _$.state(4, ($scope, y) => {
    _$.data($scope[2], y), $y_effect($scope);
  }),
  $x = _$.state(3, ($scope, x) => {
    _$.data($scope[1], x), $y($scope, x, $valueChange($scope));
  });
function $valueChange($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}
_$.register("a0", $valueChange), init();
