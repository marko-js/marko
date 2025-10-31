// size: 407 (min) 193 (brotli)
const $input__script = _._script("a0", ($scope) => _._attrs_script($scope, 0)),
  $input = _._const(2, ($scope) => {
    (_._attrs($scope, 0, { type: "checkbox", ...$scope[2] }),
      $input__script($scope));
  }),
  $checkedValue__OR__checkedValueChange = _._or(6, ($scope) => {
    ($input($scope[0], {
      checkedValue: $scope[4],
      checkedValueChange: $scope[5],
      value: "a",
    }),
      $input($scope[1], {
        checkedValue: $scope[4],
        checkedValueChange: $scope[5],
        value: "b",
      }),
      $input($scope[2], {
        checkedValue: $scope[4],
        checkedValueChange: $scope[5],
        value: "c",
      }));
  }),
  $checkedValue = _._let(4, ($scope) => {
    (_._text($scope[3], $scope[4]),
      $checkedValue__OR__checkedValueChange($scope));
  });
(_._resume("b0", function ($scope) {
  return (_new_checkedValue) => {
    $checkedValue($scope, _new_checkedValue);
  };
}),
  init());
