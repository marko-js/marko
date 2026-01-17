// size: 359 (min) 191 (brotli)
const $input__script = _._script("a0", ($scope) =>
    _._attrs_script($scope, "a"),
  ),
  $input = _._const(2, ($scope) => {
    (_._attrs_content($scope, "a", $scope.c), $input__script($scope));
  }),
  $myselect_content = _._content_resume(
    "b1",
    "<option value=a>A</option><option value=b>B</option><option value=c>C</option>",
    "d",
  ),
  $value = _._let(2, ($scope) => {
    ($input($scope.a, {
      value: $scope.c,
      valueChange: $valueChange($scope),
      content: $myselect_content($scope),
    }),
      _._text($scope.b, $scope.c));
  });
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
(_._resume("b0", $valueChange), init());
