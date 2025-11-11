// size: 164 (min) 114 (brotli)
const $B_content__value_length = _._const(4, ($scope) =>
    $A_content__value($scope.a, $scope.e),
  ),
  $B_content__tag_input_value = _._const(3, ($scope) =>
    $B_content__value_length($scope, $scope.d?.length),
  ),
  $A_content__value = _._const(3, ($scope) => _._text($scope.a, $scope.d)),
  $value = _._let(1, ($scope) =>
    $B_content__tag_input_value($scope.a, $scope.b),
  );
(_._script("a0", ($scope) => $value($scope, "hello")), init());
