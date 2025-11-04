// size: 106 (min) 106 (brotli)
const $b__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", () => $b($scope, $scope.g + 1) - 1),
  ),
  $b = _._let(6, ($scope) => {
    (_._text($scope.c, $scope.g), $b__script($scope));
  });
init();
