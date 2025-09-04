// size: 290 (min) 185 (brotli)
const $if_content__value = _._if_closure(5, 0, 0, ($scope, value) =>
    _._text($scope[0], value),
  ),
  $if_content__setup = $if_content__value,
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(0, $if_content),
  $value = _._let(5, ($scope, value) => {
    (_._attr_input_value($scope, 1, value, $valueChange($scope)),
      $if($scope, value ? 0 : 1),
      $if_content__value($scope));
  });
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_._script("a1", ($scope) => _._attr_input_value_script($scope, 1)),
  _._resume("a0", $valueChange),
  init());
