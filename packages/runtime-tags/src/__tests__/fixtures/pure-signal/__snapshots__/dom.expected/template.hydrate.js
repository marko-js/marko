// size: 130 (min) 109 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    ((($scope, double) => {
      _._text($scope.b, double);
    })($scope, 2 * $scope.c),
      $count__script($scope));
  });
init();
