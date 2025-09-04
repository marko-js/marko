// size: 406 (min) 202 (brotli)
const $input__script = _._script("a0", ($scope) => _._attrs_script($scope, 0)),
  $input = _._const(2, ($scope, input) => {
    (_._attrs($scope, 0, { type: "checkbox", ...input }),
      $input__script($scope));
  }),
  $checkedValue__OR__checkedValueChange = _._or(6, ($scope) => {
    let { 4: checkedValue, 5: $checkedValueChange } = $scope;
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
  $checkedValue = _._let(4, ($scope, checkedValue) => {
    (_._text($scope[3], checkedValue),
      $checkedValue__OR__checkedValueChange($scope));
  });
(_._resume("b0", function ($scope) {
  return (_new_checkedValue) => {
    $checkedValue($scope, _new_checkedValue);
  };
}),
  init());
