// size: 244 (min) 162 (brotli)
const $y__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $y($scope, $scope[6] + 1);
    }),
  ),
  $y = _._let(6, ($scope) => {
    (_._text($scope[2], $scope[6]), $y__script($scope));
  }),
  $x__OR__handler = _._or(5, ($scope) => $y($scope, $scope[3], $scope[4])),
  $x = _._let(3, ($scope) => {
    (_._text($scope[1], $scope[3]), $x__OR__handler($scope));
  });
(_._resume("a0", function ($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}),
  init());
