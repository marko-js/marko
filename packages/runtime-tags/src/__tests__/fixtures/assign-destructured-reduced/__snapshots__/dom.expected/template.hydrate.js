// size: 277 (min) 180 (brotli)
const $input__OR__input_valueChange__script = _._script("a0", ($scope) => {
    if (($scope.b, 2 !== _._call($scope.c, 2)))
      throw new Error("Expected value to be 2");
  }),
  $input__OR__input_valueChange = _._or(
    3,
    $input__OR__input_valueChange__script,
  ),
  $input = _._const(1, ($scope) => {
    ($input_valueChange($scope, $scope.b.valueChange),
      $input__OR__input_valueChange($scope));
  }),
  $input_valueChange = _._const(2, $input__OR__input_valueChange),
  $count = _._let(1, ($scope) =>
    $input($scope.a, { value: $scope.b, valueChange: $valueChange($scope) }),
  );
function $valueChange($scope) {
  return (_new_count) => {
    $count($scope, _new_count);
  };
}
(_._resume("b0", $valueChange), init());
