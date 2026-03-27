// size: 268 (min) 179 (brotli)
const $input__script = _._script("a0", ($scope) => {
    {
      $scope.b;
      const updated = _._call($scope.b.valueChange, 2);
      if (2 !== updated) throw new Error("Expected value to be 2");
      console.log(updated, $scope.b.value);
    }
  }),
  $input = _._const(1, $input__script),
  $count = _._let(1, ($scope) =>
    $input($scope.a, { value: $scope.b, valueChange: $valueChange($scope) }),
  );
function $valueChange($scope) {
  return (_new_count) => {
    $count($scope, _new_count);
  };
}
(_._resume("b0", $valueChange), init());
