// size: 207 (min) 127 (brotli)
const $checked = _$.state(2, ($scope, checked) => {
  (_$.controllable_input_checked($scope, 0, checked, $checkedChange($scope)),
    _$.data($scope[1], String(checked)));
});
function $checkedChange($scope) {
  return (_new_checked) => {
    $checked($scope, _new_checked);
  };
}
(_$.effect("a1", ($scope) => _$.controllable_input_checked_effect($scope, 0)),
  _$.register("a0", $checkedChange),
  init());
