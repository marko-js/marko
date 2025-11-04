// size: 275 (min) 167 (brotli)
const $x__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $x($scope, $scope.c + 1);
    }),
  ),
  $x = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c),
      _._return($scope, $scope.c),
      $x__script($scope));
  });
(_._resume("a0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
}),
  _._var_resume("b0", ($scope) => {}),
  _._script("b1", ($scope) =>
    _._on($scope.c, "click", function () {
      _._var_change($scope.Da, 0);
    }),
  ),
  init());
