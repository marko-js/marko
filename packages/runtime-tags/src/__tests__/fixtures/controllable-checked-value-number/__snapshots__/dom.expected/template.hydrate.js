// size: 508 (min) 165 (brotli)
const $checked = _._let(4, ($scope) => {
  (_._attr_input_checkedValue(
    $scope,
    "a",
    $scope.e + "",
    $checkedValueChange($scope),
    0,
  ),
    _._attr_input_checkedValue(
      $scope,
      "b",
      $scope.e,
      $checkedValueChange2($scope),
      "1",
    ),
    _._attr_input_checkedValue(
      $scope,
      "c",
      $scope.e,
      $checkedValueChange3($scope),
      2,
    ),
    _._text($scope.d, $scope.e));
});
function $checkedValueChange3($scope) {
  return function (v) {
    $checked($scope, +v);
  };
}
function $checkedValueChange2($scope) {
  return function (v) {
    $checked($scope, +v);
  };
}
function $checkedValueChange($scope) {
  return function (v) {
    $checked($scope, +v);
  };
}
(_._script("a3", ($scope) => {
  (_._attr_input_checkedValue_script($scope, "a"),
    _._attr_input_checkedValue_script($scope, "b"),
    _._attr_input_checkedValue_script($scope, "c"));
}),
  _._resume("a2", $checkedValueChange3),
  _._resume("a1", $checkedValueChange2),
  _._resume("a0", $checkedValueChange),
  init());
