// size: 328 (min) 131 (brotli)
const $value = _._let(7, ($scope) => {
  (_._attr_textarea_value_default($scope, "c", $scope.h),
    _._attr_textarea_value_default($scope, "d", $scope.h),
    _._attr_textarea_value($scope, "e", $scope.h, void 0),
    _._attr_textarea_value($scope, "f", $scope.h, void 0));
});
(_._script("a0", ($scope) => {
  (_._attr_textarea_value_script($scope, "e"),
    _._attr_textarea_value_script($scope, "f"),
    _._on($scope.g, "click", function () {
      $value($scope, "b");
    }));
}),
  init());
