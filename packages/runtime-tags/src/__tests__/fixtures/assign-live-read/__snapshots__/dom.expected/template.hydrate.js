// size: 264 (min) 163 (brotli)
const $resetCount2__script = _._script("a1", ($scope) =>
    _._on($scope.c, "click", $scope.e),
  ),
  $resetCount2 = _._const(4, $resetCount2__script),
  $count__script = _._script("a2", ($scope) => {
    (_._on($scope.a, "click", function () {
      ($count($scope, $scope.d + 1), $count($scope, $scope.d + 1));
    }),
      $scope.d);
  }),
  $count = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      $resetCount2($scope, $resetCount($scope)),
      $count__script($scope));
  });
function $resetCount($scope) {
  return function () {
    $scope.d > 0 && $count($scope, 0);
  };
}
(_._resume("a0", $resetCount), init());
