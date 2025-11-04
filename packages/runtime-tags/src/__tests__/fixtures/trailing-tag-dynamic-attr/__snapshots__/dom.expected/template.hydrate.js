// size: 125 (min) 103 (brotli)
const $toggle__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $toggle($scope, !$scope.c);
    }),
  ),
  $toggle = _._let(2, ($scope) => {
    (_._attr($scope.a, "data-toggle", $scope.c), $toggle__script($scope));
  });
init();
