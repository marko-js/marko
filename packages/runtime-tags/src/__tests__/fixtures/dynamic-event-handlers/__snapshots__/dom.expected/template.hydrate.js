// size: 116 (min) 108 (brotli)
const $clickCount__script = _._script("a0", ($scope) =>
    _._on(
      $scope.a,
      "click",
      $scope.c <= 1 &&
        (() => {
          $clickCount($scope, $scope.c + 1);
        }),
    ),
  ),
  $clickCount = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c), $clickCount__script($scope));
  });
init();
