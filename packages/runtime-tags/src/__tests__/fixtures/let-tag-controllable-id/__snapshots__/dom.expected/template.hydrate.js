// size: 236 (min) 161 (brotli)
const $y__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $y($scope, $scope.g + 1);
    }),
  ),
  $y = _._let(6, ($scope) => {
    (_._text($scope.c, $scope.g), $y__script($scope));
  }),
  $x__OR__handler = _._or(5, ($scope) => $y($scope, $scope.d, $scope.e)),
  $x = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d), $x__OR__handler($scope));
  });
(_._resume("a0", function ($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}),
  init());
