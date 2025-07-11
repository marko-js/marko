// size: 413 (min) 211 (brotli)
const $input_effect = _$.effect("a0", ($scope) => _$.attrsEvents($scope, 0)),
  $input = _$.value(2, ($scope, input) => {
    (_$.attrs($scope, 0, { type: "checkbox", ...input }),
      $input_effect($scope));
  }),
  $expr_checkedValue_$checkedValueChange = _$.intersection(6, ($scope) => {
    const { 4: checkedValue, 5: $checkedValueChange } = $scope;
    ($input($scope[0], {
      checkedValue: checkedValue,
      checkedValueChange: $checkedValueChange,
      value: "a",
    }),
      $input($scope[1], {
        checkedValue: checkedValue,
        checkedValueChange: $checkedValueChange,
        value: "b",
      }),
      $input($scope[2], {
        checkedValue: checkedValue,
        checkedValueChange: $checkedValueChange,
        value: "c",
      }));
  }),
  $checkedValue = _$.state(4, ($scope, checkedValue) => {
    (_$.data($scope[3], checkedValue),
      $expr_checkedValue_$checkedValueChange($scope));
  });
(_$.register("b0", function ($scope) {
  return (_new_checkedValue) => {
    $checkedValue($scope, _new_checkedValue);
  };
}),
  init());
