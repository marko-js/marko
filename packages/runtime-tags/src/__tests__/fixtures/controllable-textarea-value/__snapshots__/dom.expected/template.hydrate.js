// size: 190 (min) 119 (brotli)
const $value = _._let(2, ($scope) => {
  (_._attr_textarea_value($scope, "a", $scope.c, $valueChange($scope)),
    _._text($scope.b, $scope.c));
});
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_._script("a1", ($scope) => _._attr_textarea_value_script($scope, "a")),
  _._resume("a0", $valueChange),
  init());
