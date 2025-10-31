// size: 214 (min) 160 (brotli)
const $onClick__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", $scope[4]),
  ),
  $onClick$1 = _._const(4, $onClick__script),
  $text = _._const(5, ($scope) => _._text($scope[1], $scope[5])),
  $clickCount = _._let(1, ($scope) => {
    ($text($scope[0], $scope[1]), $onClick$1($scope[0], $onClick($scope)));
  });
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope[1] + 1);
  };
}
(_._resume("b0", $onClick), init());
