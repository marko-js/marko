// size: 318 (min) 179 (brotli)
const $input_value__OR__input_valueChange = _._or(5, ($scope) =>
    _._attr_input_value(
      $scope,
      "a",
      $scope.d,
      $scope.e && $valueChange$1($scope),
    ),
  ),
  $input_value = _._const(3, $input_value__OR__input_valueChange);
function $valueChange$1($scope) {
  return ($next) => {
    $scope.e(parseInt($next));
  };
}
(_._script("a1", ($scope) => _._attr_input_value_script($scope, "a")),
  _._resume("a0", $valueChange$1));
const $value = _._let(3, ($scope) => {
  ($input_value($scope.a, $scope.d),
    _._text($scope.b, $scope.d),
    _._text($scope.c, typeof $scope.d));
});
(_._resume("b0", function ($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}),
  init());
