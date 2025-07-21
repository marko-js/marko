// size: 223 (min) 150 (brotli)
const $onClick_effect = _$.effect("a0", ($scope, { 5: onClick }) =>
    _$.on($scope[0], "click", onClick),
  ),
  $onClick$1 = _$.value(5, $onClick_effect),
  $text = _$.value(4, ($scope, text) => _$.data($scope[1], text)),
  $clickCount = _$.state(1, ($scope, clickCount) => {
    ($text($scope[0], clickCount), $onClick$1($scope[0], $onClick($scope)));
  });
function $onClick($scope, { 1: clickCount } = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
(_$.register("b0", $onClick), init());
