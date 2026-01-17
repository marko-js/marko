// size: 396 (min) 185 (brotli)
const $input__script = _._script("a0", ($scope) =>
    _._attrs_script($scope, "a"),
  ),
  $input = _._const(2, ($scope) => {
    (_._attrs($scope, "a", { type: "radio", ...$scope.c }),
      $input__script($scope));
  }),
  $checkedValue__OR__checkedValueChange = _._or(6, ($scope) => {
    ($input($scope.a, {
      checkedValue: $scope.e,
      checkedValueChange: $scope.f,
      value: "a",
    }),
      $input($scope.b, {
        checkedValue: $scope.e,
        checkedValueChange: $scope.f,
        value: "b",
      }),
      $input($scope.c, {
        checkedValue: $scope.e,
        checkedValueChange: $scope.f,
        value: "c",
      }));
  }),
  $checkedValue = _._let(4, ($scope) => {
    (_._text($scope.d, $scope.e),
      $checkedValue__OR__checkedValueChange($scope));
  });
(_._resume("b0", function ($scope) {
  return (_new_checkedValue) => {
    $checkedValue($scope, _new_checkedValue);
  };
}),
  init());
