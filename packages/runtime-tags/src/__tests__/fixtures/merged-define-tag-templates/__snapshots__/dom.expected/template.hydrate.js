// size: 132 (min) 103 (brotli)
const $B_content__tag_input_value = ($scope, value) =>
    (($scope, value_length) => $A_content__value($scope.a, value_length))(
      $scope,
      value?.length,
    ),
  $A_content__value = ($scope, value) => _._text($scope.a, value),
  $value = _._let(1, ($scope) =>
    $B_content__tag_input_value($scope.a, $scope.b),
  );
(_._script("a0", ($scope) => $value($scope, "hello")), init());
