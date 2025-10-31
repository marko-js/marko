// size: 253 (min) 186 (brotli)
const $input__script = _._script("a0", ($scope) => _._attrs_script($scope, 0)),
  $input = _._const(2, ($scope) => {
    (_._attrs($scope, 0, { type: "checkbox", ...$scope[2] }),
      $input__script($scope));
  }),
  $checked = _._let(2, ($scope) => {
    ($input($scope[0], {
      checked: $scope[2],
      checkedChange: $checkedChange($scope),
    }),
      _._text($scope[1], String($scope[2])));
  });
function $checkedChange($scope) {
  return (_new_checked) => {
    $checked($scope, _new_checked);
  };
}
(_._resume("b0", $checkedChange), init());
