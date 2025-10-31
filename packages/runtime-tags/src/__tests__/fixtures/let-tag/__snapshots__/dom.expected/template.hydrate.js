// size: 170 (min) 130 (brotli)
const $x__OR__y__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", () =>
      $x($scope, $y($scope, $scope[3] + $scope[4])),
    ),
  ),
  $x__OR__y = _._or(5, $x__OR__y__script),
  $x = _._let(3, ($scope) => {
    (_._text($scope[1], $scope[3]), $x__OR__y($scope));
  }),
  $y = _._let(4, ($scope) => {
    (_._text($scope[2], $scope[4]), $x__OR__y($scope));
  });
init();
