// size: 319 (min) 178 (brotli)
const $y__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $y($scope, $scope[7] + 1);
    }),
  ),
  $y = _._let(7, ($scope) => {
    (_._text($scope[2], $scope[7]), $y__script($scope));
  }),
  $x__OR__yChange = _._or(6, ($scope) => $y($scope, $scope[4], $scope[5])),
  $x = _._let(4, ($scope) => {
    (_._text($scope[1], $scope[4]), $x__OR__yChange($scope));
  }),
  $yChange2 = _._let(5, $x__OR__yChange);
(_._script("a2", ($scope) =>
  _._on($scope[3], "click", function () {
    $yChange2($scope, null);
  }),
),
  _._resume("a0", function ($scope) {
    return function (newValue) {
      $x($scope, newValue + 1);
    };
  }),
  init());
