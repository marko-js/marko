// size: 194 (min) 128 (brotli)
const $value = _._let(2, ($scope) => {
  (_._attr_select_value($scope, "a", $scope.c, $valueChange($scope)),
    _._text($scope.b, $scope.c));
});
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
(_._script("a1", ($scope) => _._attr_select_value_script($scope, "a")),
  _._resume("a0", $valueChange),
  init());
