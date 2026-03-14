// size: 282 (min) 184 (brotli)
const $Let_content__internal = _._let(0, ($scope) =>
    _._return($scope, $scope.a),
  ),
  $a__OR__b__script = _._script("a1", ($scope) =>
    _._on($scope.c, "click", function () {
      (_._var_change($scope.a, $scope.e + 1), $b($scope, $scope.f + 1));
    }),
  ),
  $a__OR__b = _._or(6, ($scope) => {
    (_._text($scope.d, `${$scope.e},${$scope.f}`), $a__OR__b__script($scope));
  });
_._var_resume("a2", _._const(4, $a__OR__b));
const $b = _._let(5, $a__OR__b);
(_._resume("a0", function ($scope) {
  return (_new_internal) => {
    $Let_content__internal($scope, _new_internal);
  };
}),
  init());
