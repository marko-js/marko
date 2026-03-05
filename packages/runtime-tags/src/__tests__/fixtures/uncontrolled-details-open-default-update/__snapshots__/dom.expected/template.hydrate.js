// size: 201 (min) 124 (brotli)
const $open = _._let(3, ($scope) => {
  (_._attr_details_open_default($scope, "a", $scope.d),
    _._attr_details_open($scope, "b", $scope.d, void 0));
});
(_._script("a0", ($scope) => {
  (_._attr_details_open_script($scope, "b"),
    _._on($scope.c, "click", function () {
      $open($scope, !0);
    }));
}),
  init());
