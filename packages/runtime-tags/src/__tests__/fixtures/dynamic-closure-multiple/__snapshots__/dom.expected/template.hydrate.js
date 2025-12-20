// size: 307 (min) 164 (brotli)
_._enable_catch();
const $if_content__a = _._closure_get(
    2,
    ($scope) => _._text($scope.a, $scope._._.c),
    ($scope) => $scope._._,
  ),
  $if_content__b = _._closure_get(
    3,
    ($scope) => _._text($scope.b, $scope._._.d),
    ($scope) => $scope._._,
  ),
  $a__OR__b__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      ($a($scope, $scope.c + 1), $b($scope, $scope.d + 1));
    }),
  ),
  $a__OR__b = _._or(4, $a__OR__b__script),
  $a__closure = _._closure($if_content__a),
  $a = _._let(2, ($scope) => {
    ($a__OR__b($scope), $a__closure($scope));
  }),
  $b__closure = _._closure($if_content__b),
  $b = _._let(3, ($scope) => {
    ($a__OR__b($scope), $b__closure($scope));
  });
init();
