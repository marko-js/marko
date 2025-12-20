// size: 507 (min) 236 (brotli)
const $state__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $state($scope, $scope.l + 1);
    }),
  ),
  $state = _._let(11, ($scope) => {
    (_._text($scope.c, $scope.l), $state__script($scope));
  }),
  $input_value__OR__input_valueChange = _._or(10, ($scope) =>
    $state($scope, $scope.i, $scope.j),
  ),
  $input_value = _._const(8, ($scope) => {
    (_._text($scope.b, $scope.i),
      _._text($scope.e, $scope.i),
      $input_value__OR__input_valueChange($scope));
  }),
  $input_valueChange = _._const(9, $input_value__OR__input_valueChange),
  $otherState__script = _._script("a1", ($scope) =>
    _._on($scope.d, "click", function () {
      $otherState($scope, $scope.m + 1);
    }),
  ),
  $otherState = _._let(12, ($scope) => {
    (_._text($scope.f, $scope.m), $otherState__script($scope));
  }),
  $source = _._let(2, ($scope) => {
    ((($scope, input) => {
      ($input_value($scope, input.value),
        $input_valueChange($scope, input.valueChange),
        $otherState($scope, input.value, input.valueChange));
    })($scope.a, { value: $scope.c, valueChange: $valueChange($scope) }),
      _._text($scope.b, $scope.c));
  });
function $valueChange($scope) {
  return (_new_source) => {
    $source($scope, _new_source);
  };
}
(_._resume("b0", $valueChange), init());
