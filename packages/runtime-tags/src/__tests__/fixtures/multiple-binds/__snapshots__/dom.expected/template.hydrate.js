// size: 323 (min) 188 (brotli)
const $count__OR__valueChange = _._or(5, ($scope) => {
    (_._attr_input_value($scope, "b", $scope.d, $scope.e),
      _._attr_input_value($scope, "c", $scope.d, $scope.e));
  }),
  $count__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    ($count__OR__valueChange($scope), $count__script($scope));
  });
(_._script("a2", ($scope) => {
  (_._attr_input_value_script($scope, "b"),
    _._attr_input_value_script($scope, "c"));
}),
  _._resume("a0", function ($scope) {
    return (_new_count) => {
      $count($scope, _new_count);
    };
  }),
  init());
