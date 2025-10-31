// size: 291 (min) 193 (brotli)
const $if_content__value = _._if_closure(0, 0, ($scope) =>
    _._text($scope[0], $scope._[5]),
  ),
  $if_content__setup = $if_content__value,
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(0, $if_content),
  $value = _._let(5, ($scope) => {
    (_._attr_input_value($scope, 1, $scope[5], $valueChange($scope)),
      $if($scope, $scope[5] ? 0 : 1),
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
