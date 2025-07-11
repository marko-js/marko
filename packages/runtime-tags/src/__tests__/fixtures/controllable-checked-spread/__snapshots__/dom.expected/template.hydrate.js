// size: 248 (min) 170 (brotli)
const $input_effect = _$.effect("a0", ($scope) => _$.attrsEvents($scope, 0)),
  $input = _$.value(2, ($scope, input) => {
    (_$.attrs($scope, 0, { type: "checkbox", ...input }),
      $input_effect($scope));
  }),
  $checked = _$.state(2, ($scope, checked) => {
    ($input($scope[0], {
      checked: checked,
      checkedChange: $checkedChange($scope),
    }),
      _$.data($scope[1], String(checked)));
  });
function $checkedChange($scope) {
  return (_new_checked) => {
    $checked($scope, _new_checked);
  };
}
(_$.register("b0", $checkedChange), init());
