// size: 323 (min) 195 (brotli)
const $value$if$content = _$.conditionalClosure(5, 0, 0, ($scope, value) =>
    _$.data($scope[0], value),
  ),
  $setup$if$content = $value$if$content,
  $if_content = _$.createRenderer("<span> </span>", "D ", $setup$if$content),
  $if = _$.conditional(0, $if_content),
  $value = _$.state(5, ($scope, value) => {
    _$.controllable_input_value($scope, 1, value, $valueChange($scope)),
      $if($scope, value ? 0 : 1),
      $value$if$content($scope);
  });
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
_$.effect("a1", ($scope) => _$.controllable_input_value_effect($scope, 1)),
  _$.register("a0", $valueChange),
  init();
