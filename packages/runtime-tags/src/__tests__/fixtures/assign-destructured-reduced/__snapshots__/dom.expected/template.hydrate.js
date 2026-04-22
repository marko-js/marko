// size: 262 (min) 177 (brotli)
const $input__script = _._script(`a0`, ($scope) => {
    {
      $scope.b;
      let updated = _._call($scope.b.valueChange, 2);
      if (updated !== 2) throw Error(`Expected value to be 2`);
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
(_._resume(`b0`, $valueChange), init());
