// size: 268 (min) 173 (brotli)
const $if_content__value = _._if_closure(0, 0, ($scope) =>
    _._text($scope.a, $scope._.f),
  ),
  $if_content__setup = $if_content__value,
  $if = _._if(0, "<span> </span>", "D l", $if_content__setup),
  $value = _._let(5, ($scope) => {
    (_._attr_input_value($scope, "b", $scope.f, $valueChange($scope)),
      $if($scope, $scope.f ? 0 : 1),
      $if_content__value($scope));
  });
function $valueChange($scope) {
  return (_new_value) => {
    $value($scope, _new_value);
  };
}
(_._script("a1", ($scope) => _._attr_input_value_script($scope, "b")),
  _._resume("a0", $valueChange),
  init());
