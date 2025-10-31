// size: 164 (min) 123 (brotli)
const $disabled__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $disabled($scope, !$scope[3]);
    }),
  ),
  $disabled = _._let(3, ($scope) => {
    (_._attr($scope[0], "disabled", $scope[3]),
      _._text($scope[2], $scope[3] ? "enable" : "disable"),
      $disabled__script($scope));
  });
init();
