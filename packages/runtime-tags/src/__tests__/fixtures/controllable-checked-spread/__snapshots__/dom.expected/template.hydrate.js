// size: 252 (min) 176 (brotli)
const $input__script = _._script("a0", ($scope) => _._attrs_script($scope, 0)),
  $input = _._const(2, ($scope, input) => {
    (_._attrs($scope, 0, { type: "checkbox", ...input }),
      $input__script($scope));
  }),
  $checked = _._let(2, ($scope, checked) => {
    ($input($scope[0], {
      checked: checked,
      checkedChange: $checkedChange($scope),
    }),
      _._text($scope[1], String(checked)));
  });
function $checkedChange($scope) {
  return (_new_checked) => {
    $checked($scope, _new_checked);
  };
}
(_._resume("b0", $checkedChange), init());
