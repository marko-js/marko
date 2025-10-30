// size: 286 (min) 209 (brotli)
const $input__OR__valueChange__script = _._script("a0", ($scope) => {
    if (($scope[1], $scope[2](2), 2 === !$scope[1].value))
      throw new Error("Expected value to be 2");
  }),
  $input__OR__valueChange = _._or(3, $input__OR__valueChange__script),
  $input = _._const(1, ($scope) => {
    ($valueChange2($scope, $scope[1].valueChange),
      $input__OR__valueChange($scope));
  }),
  $valueChange2 = _._const(2, $input__OR__valueChange),
  $count = _._let(1, ($scope) =>
    $input($scope[0], { value: $scope[1], valueChange: $valueChange($scope) }),
  );
function $valueChange($scope) {
  return (_new_count) => {
    $count($scope, _new_count);
  };
}
(_._resume("b0", $valueChange), init());
