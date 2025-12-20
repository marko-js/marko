// size: 147 (min) 109 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      (($scope, count) => {
        _._text($scope.b, count);
      })($scope.c, $scope.d),
      $count__script($scope));
  });
init();
