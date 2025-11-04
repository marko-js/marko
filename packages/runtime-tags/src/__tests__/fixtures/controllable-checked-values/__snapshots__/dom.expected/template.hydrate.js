// size: 395 (min) 157 (brotli)
const $checkedValue__OR__checkedValueChange = _._or(6, ($scope) => {
    (_._attr_input_checkedValue($scope, "a", $scope.e, $scope.f, "a"),
      _._attr_input_checkedValue($scope, "b", $scope.e, $scope.f, "b"),
      _._attr_input_checkedValue($scope, "c", $scope.e, $scope.f, "c"));
  }),
  $checkedValue = _._let(4, ($scope) => {
    (_._text($scope.d, $scope.e),
      $checkedValue__OR__checkedValueChange($scope));
  });
(_._script("a1", ($scope) => {
  (_._attr_input_checkedValue_script($scope, "a"),
    _._attr_input_checkedValue_script($scope, "b"),
    _._attr_input_checkedValue_script($scope, "c"));
}),
  _._resume("a0", function ($scope) {
    return (_new_checkedValue) => {
      $checkedValue($scope, _new_checkedValue);
    };
  }),
  init());
