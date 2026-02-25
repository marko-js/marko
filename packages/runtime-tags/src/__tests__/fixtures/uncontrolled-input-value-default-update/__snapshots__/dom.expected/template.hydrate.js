// size: 199 (min) 121 (brotli)
const $value = _._let(3, ($scope) => {
  (_._attr_input_value_default($scope, "a", $scope.d),
    _._attr_input_value($scope, "b", $scope.d, void 0));
});
(_._script("a0", ($scope) => {
  (_._attr_input_value_script($scope, "b"),
    _._on($scope.c, "click", function () {
      $value($scope, "b");
    }));
}),
  init());
