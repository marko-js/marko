// size: 199 (min) 140 (brotli)
const $value = _$.state(2, ($scope, value) => {
  _$.controllable_input_value($scope, 0, value, $valueChange($scope)),
    _$.data($scope[1], value);
});
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
_$.effect("a1", ($scope) => _$.controllable_input_value_effect($scope, 0)),
  _$.register("a0", $valueChange),
  init();
