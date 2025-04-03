// size: 450 (min) 178 (brotli)
const $expr_checkedValue_$checkedValueChange = _$.intersection(6, ($scope) => {
    const { 4: checkedValue, 5: $checkedValueChange } = $scope;
    _$.controllable_input_checkedValue(
      $scope,
      0,
      checkedValue,
      $checkedValueChange,
      "a",
    ),
      _$.controllable_input_checkedValue(
        $scope,
        1,
        checkedValue,
        $checkedValueChange,
        "b",
      ),
      _$.controllable_input_checkedValue(
        $scope,
        2,
        checkedValue,
        $checkedValueChange,
        "c",
      );
  }),
  $checkedValue = _$.state(4, ($scope, checkedValue) => {
    _$.data($scope[3], checkedValue),
      $expr_checkedValue_$checkedValueChange($scope);
  });
_$.effect("a1", ($scope) => {
  _$.controllable_input_checkedValue_effect($scope, 0),
    _$.controllable_input_checkedValue_effect($scope, 1),
    _$.controllable_input_checkedValue_effect($scope, 2);
}),
  _$.register("a0", function ($scope) {
    return (_new_checkedValue) => {
      $checkedValue($scope, _new_checkedValue);
    };
  }),
  init();
