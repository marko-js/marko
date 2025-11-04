// size: 196 (min) 130 (brotli)
const $checked = _._let(2, ($scope) => {
  (_._attr_input_checked($scope, "a", $scope.c, $checkedChange($scope)),
    _._text($scope.b, String($scope.c)));
});
function $checkedChange($scope) {
  return (_new_checked) => {
    $checked($scope, _new_checked);
  };
}
(_._script("a1", ($scope) => _._attr_input_checked_script($scope, "a")),
  _._resume("a0", $checkedChange),
  init());
