// size: 310 (min) 167 (brotli)
const $y__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $y($scope, $scope.h + 1);
    }),
  ),
  $y = _._let(7, ($scope) => {
    (_._text($scope.c, $scope.h), $y__script($scope));
  }),
  $x__OR__yChange = _._or(6, ($scope) => $y($scope, $scope.e, $scope.f)),
  $x = _._let(4, ($scope) => {
    (_._text($scope.b, $scope.e), $x__OR__yChange($scope));
  }),
  $yChange2 = _._let(5, $x__OR__yChange);
(_._script("a2", ($scope) =>
  _._on($scope.d, "click", function () {
    $yChange2($scope, null);
  }),
),
  _._resume("a0", function ($scope) {
    return function (newValue) {
      $x($scope, newValue + 1);
    };
  }),
  init());
