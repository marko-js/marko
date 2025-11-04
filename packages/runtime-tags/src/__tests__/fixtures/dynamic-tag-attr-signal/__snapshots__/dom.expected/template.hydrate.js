// size: 130 (min) 113 (brotli)
const $className__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $className($scope, "A" === $scope.c ? "B" : "A");
    }),
  ),
  $className = _._let(2, ($scope) => {
    (_._attr_class($scope.a, $scope.c), $className__script($scope));
  });
init();
