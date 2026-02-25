// size: 228 (min) 124 (brotli)
const $value = _._let(5, ($scope) => {
  (_._attr_input_checkedValue_default($scope, "c", $scope.f, "b"),
    _._attr_input_checkedValue($scope, "d", $scope.f, void 0, "b"));
});
(_._script("a0", ($scope) => {
  (_._attr_input_checkedValue_script($scope, "d"),
    _._on($scope.e, "click", function () {
      $value($scope, "b");
    }));
}),
  init());
