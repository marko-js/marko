// size: 147 (min) 112 (brotli)
const $x__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $x($scope, $scope.d + 1);
    }),
  ),
  $x = _._let(3, ($scope) => {
    ((($scope, number) => {
      _._text($scope.a, number);
    })($scope.a, $scope.d),
      _._text($scope.c, $scope.d),
      $x__script($scope));
  });
init();
