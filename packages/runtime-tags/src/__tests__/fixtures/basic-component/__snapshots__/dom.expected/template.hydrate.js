// size: 112 (min) 94 (brotli)
const $clickCount__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $clickCount($scope, $scope.c + 1);
    }),
  ),
  $clickCount = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c), $clickCount__script($scope));
  });
init();
