// size: 202 (min) 123 (brotli)
const $value = _._let(5, ($scope) => {
  (_._attr_select_value_default($scope, "c", $scope.f),
    _._attr_select_value($scope, "d", $scope.f, void 0));
});
(_._script("a0", ($scope) => {
  (_._attr_select_value_script($scope, "d"),
    _._on($scope.e, "click", function () {
      $value($scope, "b");
    }));
}),
  init());
