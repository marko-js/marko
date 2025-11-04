// size: 206 (min) 148 (brotli)
const $sum = _._const(3, ($scope) => _._text($scope.b, $scope.d())),
  $items__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $items($scope, [...$scope.c, $scope.c?.length]);
    }),
  ),
  $items = _._let(2, ($scope) => {
    ($sum($scope, function sum(i = 0) {
      return i >= $scope.c?.length ? 0 : $scope.c[i] + sum(i + 1);
    }),
      $items__script($scope));
  });
init();
