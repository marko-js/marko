// size: 160 (min) 121 (brotli)
const $a__OR__b__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      ($a($scope, $scope[2] + 1), $b($scope, $scope[3] + 1));
    }),
  ),
  $a__OR__b = _._or(4, ($scope) => {
    (_._text($scope[1], $scope[2] + $scope[3]), $a__OR__b__script($scope));
  }),
  $a = _._let(2, $a__OR__b),
  $b = _._let(3, $a__OR__b);
init();
