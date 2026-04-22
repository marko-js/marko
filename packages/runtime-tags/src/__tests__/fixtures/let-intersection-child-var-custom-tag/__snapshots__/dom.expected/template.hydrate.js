// size: 488 (min) 290 (brotli)
const subsByKey = {},
  $value = _._let(3, ($scope) => _._return($scope, $scope.d));
_._script(`b1`, ($scope) => {
  {
    let subs = (subsByKey[$scope.c] ??= new Set()),
      sub = () => $value($scope, $scope.$[$scope.c]);
    ((_.$signal($scope, 0).onabort = () => subs.delete(sub)), subs.add(sub));
  }
});
function $valueChange($scope) {
  return function (next) {
    (($scope.$[$scope.c] = next), subsByKey[$scope.c]?.forEach((cb) => cb()));
  };
}
_._resume(`b0`, $valueChange);
const $a__OR__b = _._or(
    8,
    ($scope) => _._text($scope.f, `${$scope.g},${$scope.h}`),
    1,
    1,
  ),
  $b = _._let(7, ($scope) => {
    (_._text($scope.d, $scope.h), $a__OR__b($scope));
  });
(_._var_resume(
  `c0`,
  _._const(6, ($scope) => {
    (_._text($scope.c, $scope.g), $b($scope, $scope.g + 1), $a__OR__b($scope));
  }),
),
  _._script(`c1`, ($scope) =>
    _._on($scope.e, `click`, function () {
      (_._var_change($scope.a, 2), $b($scope, 2));
    }),
  ),
  init());
