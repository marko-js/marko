// size: 252 (min) 165 (brotli)
const $input__OR__count = _._or(5, ($scope) =>
    _._text($scope[1], $scope[3].format($scope[4])),
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[4] + 1);
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
