// size: 106 (min) 98 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", () => {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c), $count__script($scope));
  });
init();
