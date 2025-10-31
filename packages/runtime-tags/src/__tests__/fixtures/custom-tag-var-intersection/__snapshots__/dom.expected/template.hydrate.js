// size: 269 (min) 184 (brotli)
const $input_extra__OR__x = _._or(6, ($scope) =>
    _._return($scope, $scope[5] + $scope[4]),
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $x($scope, $scope[5] + 1);
    }),
  ),
  $x = _._let(5, ($scope) => {
    (_._text($scope[1], $scope[5]),
      $input_extra__OR__x($scope),
      $x__script($scope));
  }),
  $message = _._const(6, ($scope) => _._text($scope[2], $scope[6])),
  $name__OR__data = _._or(
    5,
    ($scope) => $message($scope, `${$scope[3]} ${$scope[4]}`),
    1,
    1,
  );
(_._var_resume("b0", _._const(4, $name__OR__data)), init());
