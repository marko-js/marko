// size: 596 (min) 197 (brotli)
const $checked = _._let(5, ($scope) => {
  (_._attr_input_checkedValue(
    $scope,
    "a",
    $scope.f,
    $checkedValueChange($scope),
    0,
  ),
    _._attr_input_checkedValue(
      $scope,
      "b",
      $scope.f,
      $checkedValueChange2($scope),
      "1",
    ),
    _._attr_input_checkedValue(
      $scope,
      "c",
      $scope.f,
      $checkedValueChange3($scope),
      2,
    ),
    _._text($scope.d, $scope.f));
});
function $checkedValueChange3($scope) {
  return function (v) {
    $checked(
      $scope,
      v.map((it) => Number(it)),
    );
  };
}
function $checkedValueChange2($scope) {
  return function (v) {
    $checked(
      $scope,
      v.map((it) => Number(it)),
    );
  };
}
function $checkedValueChange($scope) {
  return function (v) {
    $checked(
      $scope,
      v.map((it) => Number(it)),
    );
  };
}
(_._script("a3", ($scope) => {
  (_._attr_input_checkedValue_script($scope, "a"),
    _._attr_input_checkedValue_script($scope, "b"),
    _._attr_input_checkedValue_script($scope, "c"),
    _._on($scope.e, "click", function () {
      $checked($scope, [1]);
    }));
}),
  _._resume("a2", $checkedValueChange3),
  _._resume("a1", $checkedValueChange2),
  _._resume("a0", $checkedValueChange),
  init());
