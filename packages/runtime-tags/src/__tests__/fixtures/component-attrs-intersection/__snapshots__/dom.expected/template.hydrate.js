// size: 159 (min) 121 (brotli)
const $value__OR__dummy = _._or(5, ($scope) =>
    _._text($scope.a, ($scope.e, $scope.d)),
  ),
  $value = _._const(3, $value__OR__dummy),
  $count__script = _._script("b0", ($scope) =>
    _._on($scope.b, "click", function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    ($value($scope.a, $scope.c), $count__script($scope));
  });
init();
