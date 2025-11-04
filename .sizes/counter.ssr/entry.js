// size: 96 (min) 92 (brotli)
const $clickCount__script = _script("a0", ($scope) =>
    _on($scope.a, "click", function () {
      $clickCount($scope, $scope.c + 1);
    }),
  ),
  $clickCount = _let(2, ($scope) => {
    (_text($scope.b, $scope.c), $clickCount__script($scope));
  });
init();
