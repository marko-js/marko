// size: 129 (min) 114 (brotli)
const $toggle__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $toggle($scope, !$scope[2]);
    }),
  ),
  $toggle = _._let(2, ($scope) => {
    (_._attr($scope[0], "data-toggle", $scope[2]), $toggle__script($scope));
  });
init();
