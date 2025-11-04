// size: 154 (min) 115 (brotli)
const $a__OR__b__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      ($a($scope, $scope.c + 1), $b($scope, $scope.d + 1));
    }),
  ),
  $a__OR__b = _._or(4, ($scope) => {
    (_._text($scope.b, $scope.c + $scope.d), $a__OR__b__script($scope));
  }),
  $a = _._let(2, $a__OR__b),
  $b = _._let(3, $a__OR__b);
init();
