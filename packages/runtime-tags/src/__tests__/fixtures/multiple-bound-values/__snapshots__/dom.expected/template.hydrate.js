// size: 489 (min) 230 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count$1($scope, $scope.m + 1);
    }),
  ),
  $count$1 = _._let(12, ($scope) => {
    (_._text($scope.b, $scope.m), $count__script($scope));
  }),
  $input_count1__OR__input_count1Change = _._or(8, ($scope) =>
    $count$1($scope, $scope.g, $scope.h),
  ),
  $input_count = _._const(6, $input_count1__OR__input_count1Change),
  $count2__script = _._script("a1", ($scope) =>
    _._on($scope.c, "click", function () {
      $count2$1($scope, $scope.n + 1);
    }),
  ),
  $count2$1 = _._let(13, ($scope) => {
    (_._text($scope.d, $scope.n), $count2__script($scope));
  }),
  $input_count2__OR__input_count2Change = _._or(11, ($scope) =>
    $count2$1($scope, $scope.j, $scope.k),
  ),
  $input_count2 = _._const(9, $input_count2__OR__input_count2Change),
  $count = _._let(3, ($scope) => {
    ($input_count($scope.a, $scope.d), _._text($scope.b, $scope.d));
  }),
  $count2 = _._let(4, ($scope) => {
    ($input_count2($scope.a, $scope.e), _._text($scope.c, $scope.e));
  });
(_._resume("b1", function ($scope) {
  return (_new_count2) => {
    $count2($scope, _new_count2);
  };
}),
  _._resume("b0", function ($scope) {
    return (_new_count1) => {
      $count($scope, _new_count1);
    };
  }),
  init());
