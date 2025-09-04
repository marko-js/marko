// size: 226 (min) 161 (brotli)
const $onClick__script = _._script("a0", ($scope, { 5: onClick }) =>
    _._on($scope[0], "click", onClick),
  ),
  $onClick$1 = _._const(5, $onClick__script),
  $text = _._const(4, ($scope, text) => _._text($scope[1], text)),
  $clickCount = _._let(1, ($scope, clickCount) => {
    ($text($scope[0], clickCount), $onClick$1($scope[0], $onClick($scope)));
  });
function $onClick($scope, { 1: clickCount } = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
(_._resume("b0", $onClick), init());
