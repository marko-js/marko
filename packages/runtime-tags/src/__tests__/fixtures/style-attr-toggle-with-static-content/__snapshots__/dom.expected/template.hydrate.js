// size: 150 (min) 123 (brotli)
const $open__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $open($scope, !$scope[2]);
    }),
  ),
  $open = _._let(2, ($scope) => {
    (_._attr_style_item($scope[1], "display", $scope[2] ? void 0 : "none"),
      $open__script($scope));
  });
init();
