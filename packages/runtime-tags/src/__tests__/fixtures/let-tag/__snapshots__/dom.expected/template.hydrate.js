// size: 163 (min) 122 (brotli)
const $x__OR__y__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", () => $x($scope, $y($scope, $scope.d + $scope.e))),
  ),
  $x__OR__y = _._or(5, $x__OR__y__script),
  $x = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d), $x__OR__y($scope));
  }),
  $y = _._let(4, ($scope) => {
    (_._text($scope.c, $scope.e), $x__OR__y($scope));
  });
init();
