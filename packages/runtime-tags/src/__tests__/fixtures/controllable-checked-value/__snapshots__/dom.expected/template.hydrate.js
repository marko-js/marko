// size: 391 (min) 172 (brotli)
const $checkedValue__OR__checkedValueChange = _._or(6, ($scope) => {
    (_._attr_input_checkedValue($scope, 0, $scope[4], $scope[5], "a"),
      _._attr_input_checkedValue($scope, 1, $scope[4], $scope[5], "b"),
      _._attr_input_checkedValue($scope, 2, $scope[4], $scope[5], "c"));
  }),
  $checkedValue = _._let(4, ($scope) => {
    (_._text($scope[3], $scope[4]),
      $checkedValue__OR__checkedValueChange($scope));
  });
(_._script("a1", ($scope) => {
  (_._attr_input_checkedValue_script($scope, 0),
    _._attr_input_checkedValue_script($scope, 1),
    _._attr_input_checkedValue_script($scope, 2));
}),
  _._resume("a0", function ($scope) {
    return (_new_checkedValue) => {
      $checkedValue($scope, _new_checkedValue);
    };
  }),
  init());
