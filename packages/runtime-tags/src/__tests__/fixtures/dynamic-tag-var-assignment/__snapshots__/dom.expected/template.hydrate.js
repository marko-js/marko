// size: 281 (min) 181 (brotli)
const $x__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $x($scope, $scope[2] + 1);
    }),
  ),
  $x = _._let(2, ($scope) => {
    (_._text($scope[1], $scope[2]),
      _._return($scope, $scope[2]),
      $x__script($scope));
  });
(_._resume("a0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
}),
  _._var_resume("b0", ($scope) => {}),
  _._script("b1", ($scope) =>
    _._on($scope[2], "click", function () {
      _._var_change($scope.d0, 0);
    }),
  ),
  init());
