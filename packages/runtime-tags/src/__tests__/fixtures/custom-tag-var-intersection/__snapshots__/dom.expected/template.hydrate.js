// size: 259 (min) 177 (brotli)
const $input_extra__OR__x = _._or(6, ($scope) =>
    _._return($scope, $scope.f + $scope.e),
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $x($scope, $scope.f + 1);
    }),
  ),
  $x = _._let(5, ($scope) => {
    (_._text($scope.b, $scope.f),
      $input_extra__OR__x($scope),
      $x__script($scope));
  }),
  $message = _._const(6, ($scope) => _._text($scope.c, $scope.g)),
  $name__OR__data = _._or(
    5,
    ($scope) => $message($scope, `${$scope.d} ${$scope.e}`),
    1,
    1,
  );
(_._var_resume("b0", _._const(4, $name__OR__data)), init());
