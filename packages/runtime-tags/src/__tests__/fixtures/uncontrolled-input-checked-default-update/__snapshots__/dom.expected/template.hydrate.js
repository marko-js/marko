// size: 204 (min) 119 (brotli)
const $checked = _._let(3, ($scope) => {
  (_._attr_input_checked_default($scope, "a", $scope.d),
    _._attr_input_checked($scope, "b", $scope.d, void 0));
});
(_._script("a0", ($scope) => {
  (_._attr_input_checked_script($scope, "b"),
    _._on($scope.c, "click", function () {
      $checked($scope, !0);
    }));
}),
  init());
