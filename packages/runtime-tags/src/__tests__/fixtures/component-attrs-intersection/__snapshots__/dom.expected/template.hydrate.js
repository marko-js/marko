// size: 166 (min) 131 (brotli)
const $value__OR__dummy = _._or(5, ($scope) =>
    _._text($scope[0], ($scope[4], $scope[3])),
  ),
  $value = _._const(3, $value__OR__dummy),
  $count__script = _._script("b0", ($scope) =>
    _._on($scope[1], "click", function () {
      $count($scope, $scope[2] + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    ($value($scope[0], $scope[2]), $count__script($scope));
  });
init();
