// size: 252 (min) 178 (brotli)
const $input__script = _._script("a0", ($scope) =>
    _._attrs_script($scope, "a"),
  ),
  $input = _._const(2, ($scope) => {
    (_._attrs($scope, "a", { type: "checkbox", ...$scope.c }),
      $input__script($scope));
  }),
  $checked = _._let(2, ($scope) => {
    ($input($scope.a, {
      checked: $scope.c,
      checkedChange: $checkedChange($scope),
    }),
      _._text($scope.b, String($scope.c)));
  });
function $checkedChange($scope) {
  return (_new_checked) => {
    $checked($scope, _new_checked);
  };
}
(_._resume("b0", $checkedChange), init());
