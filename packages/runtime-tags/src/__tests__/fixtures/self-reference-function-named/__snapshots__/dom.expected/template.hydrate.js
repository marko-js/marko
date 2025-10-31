// size: 213 (min) 151 (brotli)
const $sum = _._const(3, ($scope) => _._text($scope[1], $scope[3]())),
  $items__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $items($scope, [...$scope[2], $scope[2]?.length]);
    }),
  ),
  $items = _._let(2, ($scope) => {
    ($sum($scope, function sum(i = 0) {
      return i >= $scope[2]?.length ? 0 : $scope[2][i] + sum(i + 1);
    }),
      $items__script($scope));
  });
init();
