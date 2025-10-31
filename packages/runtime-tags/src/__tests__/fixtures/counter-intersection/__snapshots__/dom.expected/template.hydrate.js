// size: 230 (min) 142 (brotli)
const $a__OR__b = _._or(7, ($scope) =>
    _._text($scope[4], $scope[5] + $scope[6]),
  ),
  $a = _._let(5, ($scope) => {
    (_._text($scope[1], $scope[5]), $a__OR__b($scope));
  }),
  $b = _._let(6, ($scope) => {
    (_._text($scope[3], $scope[6]), $a__OR__b($scope));
  });
(_._script("a0", ($scope) => {
  (_._on($scope[0], "click", function () {
    $a($scope, 10);
  }),
    _._on($scope[2], "click", function () {
      $b($scope, 5);
    }));
}),
  init());
