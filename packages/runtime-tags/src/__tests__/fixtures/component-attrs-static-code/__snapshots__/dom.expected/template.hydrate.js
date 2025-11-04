// size: 247 (min) 149 (brotli)
const $input__OR__count = _._or(5, ($scope) =>
    _._text($scope.b, $scope.d.format($scope.e)),
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.e + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($input__OR__count($scope), $count__script($scope));
  });
(_._resume("b0", function (n) {
  return "$" + n.toFixed(2);
}),
  _._resume("b1", function (n) {
    return "$" + n.toFixed(2);
  }),
  init());
