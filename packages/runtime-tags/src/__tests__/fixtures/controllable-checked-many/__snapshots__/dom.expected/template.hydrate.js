// size: 528 (min) 307 (brotli)
const $for_content__checked = _._let(6, ($scope) =>
    _._attr_input_checked($scope, "a", $scope.g, $checkedChange($scope)),
  ),
  $for_content__states__OR__state = _._or(3, ($scope) =>
    $for_content__checked($scope, $scope.c, $valueChange($scope)),
  ),
  $for_content__states = _._for_closure(0, $for_content__states__OR__state),
  $for_content__setup__script = _._script("a2", ($scope) =>
    _._attr_input_checked_script($scope, "a"),
  ),
  $for_content__setup = ($scope) => {
    ($for_content__states._($scope), $for_content__setup__script($scope));
  },
  $for_content__state = _._const(2, $for_content__states__OR__state),
  $for_content__$params = ($scope, $params2) =>
    $for_content__state($scope, $params2[0]),
  $for = _._for_of(
    0,
    "<input type=checkbox>",
    " b",
    $for_content__setup,
    $for_content__$params,
  ),
  $states = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c.join(",")),
      $for($scope, [$scope.c]),
      $for_content__states($scope));
  });
function $checkedChange($scope) {
  return (_new_checked) => {
    $for_content__checked($scope, _new_checked);
  };
}
function $valueChange($scope) {
  return function (value) {
    if (void 0 === $scope.M) throw new Error("LoopKey is undefined");
    const newStates = [...$scope._.c];
    ((newStates[$scope.M] = value), $states($scope._, newStates));
  };
}
(_._resume("a1", $checkedChange), _._resume("a0", $valueChange), init());
