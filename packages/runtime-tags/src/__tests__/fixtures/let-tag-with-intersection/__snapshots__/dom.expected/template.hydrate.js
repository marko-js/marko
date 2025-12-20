// size: 259 (min) 154 (brotli)
const $y__OR__z = _._or(8, ($scope) =>
    (($scope, a) => _._text($scope.e, a))($scope, $scope.g + $scope.h),
  ),
  $y = _._const(6, ($scope) => {
    (_._text($scope.c, $scope.g), $y__OR__z($scope));
  }),
  $z = _._const(7, ($scope) => {
    (_._text($scope.d, $scope.h), $y__OR__z($scope));
  }),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", () => $x($scope, $scope.f + 1) - 1),
  ),
  $x = _._let(5, ($scope) => {
    (_._text($scope.b, $scope.f),
      $y($scope, $scope.f + 1),
      $z($scope, $scope.f + 2),
      $x__script($scope));
  });
init();
