// size: 431 (min) 243 (brotli)
const $valueChange2__script = _._script("a0", ($scope) => $scope.d(2)),
  $valueChange2 = _._const(3, $valueChange2__script),
  $rest__script = _._script("a1", ($scope) => _._attrs_script($scope, "a")),
  $rest = _._const(4, ($scope) => {
    (_._attrs_content($scope, "a", $scope.e), $rest__script($scope));
  }),
  $child_content__value = _._closure_get(1, ($scope) =>
    _._text($scope.a, $scope._.b),
  ),
  $child_content__setup = $child_content__value,
  $child_content = _._content_resume("b1", " ", " b", $child_content__setup),
  $value__closure = _._closure($child_content__value),
  $value = _._let(1, ($scope) => {
    ((($scope, input) => {
      ((({ value: value, ...rest }) => {
        $rest($scope, rest);
      })(input),
        $valueChange2($scope, input.valueChange));
    })($scope.a, {
      value: $scope.b,
      valueChange: $valueChange($scope),
      content: $child_content($scope),
    }),
      $value__closure($scope));
  });
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_._resume("b0", $valueChange), init());
