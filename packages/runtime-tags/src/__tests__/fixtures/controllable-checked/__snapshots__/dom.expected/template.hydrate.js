// size: 195 (min) 130 (brotli)
const $checked = _._let(2, ($scope) => {
  (_._attr_input_checked($scope, 0, $scope[2], $checkedChange($scope)),
    _._text($scope[1], String($scope[2])));
});
function $checkedChange($scope) {
  return (_new_checked) => {
    $checked($scope, _new_checked);
  };
}
(_._script("a1", ($scope) => _._attr_input_checked_script($scope, 0)),
  _._resume("a0", $checkedChange),
  init());
