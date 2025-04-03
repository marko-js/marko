// size: 229 (min) 149 (brotli)
const $text = _$.value(5, ($scope, text) => _$.data($scope[1], text)),
  $onClick_effect = _$.effect("a0", ($scope, { 4: onClick }) =>
    _$.on($scope[0], "click", onClick),
  ),
  $onClick$1 = _$.value(4, $onClick_effect),
  $clickCount = _$.state(1, ($scope, clickCount) => {
    $text($scope[0], clickCount), $onClick$1($scope[0], $onClick($scope));
  });
function $onClick($scope, { 1: clickCount } = $scope) {
  return function () {
    $clickCount($scope, clickCount + 1);
  };
}
_$.register("b0", $onClick), init();
