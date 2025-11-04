// size: 146 (min) 114 (brotli)
const $clickCount__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      (($scope.c.innerHTML = $clickCount($scope, $scope.e + 1) - 1),
        ($scope.d.innerHTML = $scope.e));
    }),
  ),
  $clickCount = _._let(4, ($scope) => {
    (_._text($scope.b, $scope.e), $clickCount__script($scope));
  });
init();
