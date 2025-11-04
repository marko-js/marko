// size: 390 (min) 193 (brotli)
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
_._resume("a0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
});
const $count__script = _._script("b0", ($scope) =>
  _._on($scope.c, "click", function () {
    _._var_change($scope.a, $scope.f + 1);
  }),
);
(_._var_resume(
  "b1",
  _._const(5, ($scope) => {
    (_._text($scope.d, $scope.f), $count__script($scope));
  }),
),
  _._script("b2", ($scope) =>
    _._on($scope.e, "click", function () {
      _._var_change($scope.a, 0);
    }),
  ),
  init());
