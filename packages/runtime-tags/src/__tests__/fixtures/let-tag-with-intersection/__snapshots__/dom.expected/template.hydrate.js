// size: 285 (min) 170 (brotli)
const $a = _._const(9, ($scope) => _._text($scope[4], $scope[9])),
  $y__OR__z = _._or(8, ($scope) => $a($scope, $scope[6] + $scope[7])),
  $y = _._const(6, ($scope) => {
    (_._text($scope[2], $scope[6]), $y__OR__z($scope));
  }),
  $z = _._const(7, ($scope) => {
    (_._text($scope[3], $scope[7]), $y__OR__z($scope));
  }),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", () => $x($scope, $scope[5] + 1) - 1),
  ),
  $x = _._let(5, ($scope) => {
    (_._text($scope[1], $scope[5]),
      $y($scope, $scope[5] + 1),
      $z($scope, $scope[5] + 2),
      $x__script($scope));
  });
init();
