// size: 112 (min) 94 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text($scope.a, $scope.c), $count__script($scope));
  });
init();
