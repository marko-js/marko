// size: 176 (min) 136 (brotli)
const $increment2__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", $scope.d),
  ),
  $increment2 = _._const(3, $increment2__script),
  $clickCount = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c), $increment2($scope, $increment($scope)));
  });
function $increment($scope) {
  return function () {
    $clickCount($scope, $scope.c + 1);
  };
}
(_._resume("a0", $increment), init());
