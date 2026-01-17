// size: 219 (min) 144 (brotli)
const $input__script = _._script("a0", ($scope) =>
    _._attrs_script($scope, "a"),
  ),
  $input = _._const(2, ($scope) => {
    (_._attrs($scope, "a", $scope.c), $input__script($scope));
  }),
  $value = _._let(2, ($scope) => {
    ($input($scope.a, { value: $scope.c, valueChange: $valueChange($scope) }),
      _._text($scope.b, $scope.c));
  });
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_._resume("b0", $valueChange), init());
