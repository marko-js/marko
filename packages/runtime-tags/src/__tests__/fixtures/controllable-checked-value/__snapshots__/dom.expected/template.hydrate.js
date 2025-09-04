// size: 389 (min) 170 (brotli)
const $checkedValue__OR__checkedValueChange = _._or(6, ($scope) => {
    let { 4: checkedValue, 5: $checkedValueChange } = $scope;
    (_._attr_input_checkedValue(
      $scope,
      0,
      checkedValue,
      $checkedValueChange,
      "a",
    ),
      _._attr_input_checkedValue(
        $scope,
        1,
        checkedValue,
        $checkedValueChange,
        "b",
      ),
      _._attr_input_checkedValue(
        $scope,
        2,
        checkedValue,
        $checkedValueChange,
        "c",
      ));
  }),
  $checkedValue = _._let(4, ($scope, checkedValue) => {
    (_._text($scope[3], checkedValue),
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
