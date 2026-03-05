// size: 97 (min) 81 (brotli)
(_._script("a1", ($scope) => ($scope.a.textContent = $scope.c.bar())),
  _._resume("a0", function ($scope) {
    return () => $scope.b?.bar;
  }),
  init());
