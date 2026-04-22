// size: 279 (min) 176 (brotli)
const $value = _._let(3, ($scope) => _._return($scope, $scope.d));
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
_._resume(`a0`, $valueChange);
const $mytag_content__count__script = _._script(`c0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      _._var_change($scope._.a, $scope._.d + 1);
    }),
  ),
  $mytag_content__count = _._closure_get(3, ($scope) => {
    (_._text($scope.b, $scope._.d), $mytag_content__count__script($scope));
  }),
  $count__closure = _._closure($mytag_content__count);
(_._var_resume(`c2`, _._const(3, $count__closure)), init());
