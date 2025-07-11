// size: 205 (min) 122 (brotli)
const $value = _$.state(2, ($scope, value) => {
  (_$.controllable_select_value($scope, 0, value, $valueChange($scope)),
    _$.data($scope[1], value));
});
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
(_$.effect("a1", ($scope) => _$.controllable_select_value_effect($scope, 0)),
  _$.register("a0", $valueChange),
  init());
