// size: 158 (min) 119 (brotli)
const $disabled__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $disabled($scope, !$scope.d);
    }),
  ),
  $disabled = _._let(3, ($scope) => {
    (_._attr($scope.a, "disabled", $scope.d),
      _._text($scope.c, $scope.d ? "enable" : "disable"),
      $disabled__script($scope));
  });
init();
