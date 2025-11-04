// size: 221 (min) 136 (brotli)
const $a__OR__b = _._or(7, ($scope) => _._text($scope.e, $scope.f + $scope.g)),
  $a = _._let(5, ($scope) => {
    (_._text($scope.b, $scope.f), $a__OR__b($scope));
  }),
  $b = _._let(6, ($scope) => {
    (_._text($scope.d, $scope.g), $a__OR__b($scope));
  });
(_._script("a0", ($scope) => {
  (_._on($scope.a, "click", function () {
    $a($scope, 10);
  }),
    _._on($scope.c, "click", function () {
      $b($scope, 5);
    }));
}),
  init());
