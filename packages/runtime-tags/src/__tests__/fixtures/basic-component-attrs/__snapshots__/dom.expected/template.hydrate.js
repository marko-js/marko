// size: 196 (min) 143 (brotli)
const $onClick__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", $scope.e),
  ),
  $onClick$1 = _._const(4, $onClick__script),
  $clickCount = _._let(1, ($scope) => {
    ((($scope, text) => {
      _._text($scope.b, text);
    })($scope.a, $scope.b),
      $onClick$1($scope.a, $onClick($scope)));
  });
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope.b + 1);
  };
}
(_._resume("b0", $onClick), init());
