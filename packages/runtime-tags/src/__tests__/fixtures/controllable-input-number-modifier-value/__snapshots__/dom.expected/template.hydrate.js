// size: 218 (min) 133 (brotli)
const $value = _._let(3, ($scope) => {
  (_._attr_input_value($scope, "a", $scope.d, $valueChange($scope)),
    _._text($scope.b, $scope.d),
    _._text($scope.c, typeof $scope.d));
});
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, parseInt(_new_value));
  };
}
(_._script("a1", ($scope) => _._attr_input_value_script($scope, "a")),
  _._resume("a0", $valueChange),
  init());
