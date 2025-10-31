// size: 183 (min) 127 (brotli)
const $value = _._let(2, ($scope) => {
  (_._attr_input_value($scope, 0, $scope[2], $valueChange($scope)),
    _._text($scope[1], $scope[2]));
});
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_._script("a1", ($scope) => _._attr_input_value_script($scope, 0)),
  _._resume("a0", $valueChange),
  init());
