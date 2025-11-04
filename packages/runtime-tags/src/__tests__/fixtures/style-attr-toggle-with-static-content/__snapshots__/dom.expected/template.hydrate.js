// size: 146 (min) 119 (brotli)
const $open__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $open($scope, !$scope.c);
    }),
  ),
  $open = _._let(2, ($scope) => {
    (_._attr_style_item($scope.b, "display", $scope.c ? void 0 : "none"),
      $open__script($scope));
  });
init();
