// size: 194 (min) 135 (brotli)
const $value = _._let(2, ($scope) => {
  (_._attr_select_value($scope, `a`, $scope.c, $valueChange($scope)),
    _._text($scope.b, $scope.c));
});
_._script(`a1`, ($scope) => _._attr_select_value_script($scope, `a`));
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
(_._resume(`a0`, $valueChange), init());
