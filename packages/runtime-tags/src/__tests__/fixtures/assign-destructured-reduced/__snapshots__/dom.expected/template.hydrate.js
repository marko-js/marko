// size: 277 (min) 177 (brotli)
const $input__OR__valueChange__script = _._script("a0", ($scope) => {
    if (($scope.b, 2 !== _._call($scope.c, 2)))
      throw new Error("Expected value to be 2");
  }),
  $input__OR__valueChange = _._or(3, $input__OR__valueChange__script),
  $input = _._const(1, ($scope) => {
    ($valueChange2($scope, $scope.b.valueChange),
      $input__OR__valueChange($scope));
  }),
  $valueChange2 = _._const(2, $input__OR__valueChange),
  $count = _._let(1, ($scope) =>
    $input($scope.a, { value: $scope.b, valueChange: $valueChange($scope) }),
  );
function $valueChange($scope) {
  return (_new_count) => {
    $count($scope, _new_count);
  };
}
(_._resume("b0", $valueChange), init());
