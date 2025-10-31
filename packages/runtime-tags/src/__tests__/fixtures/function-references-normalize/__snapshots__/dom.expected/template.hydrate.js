// size: 100 (min) 86 (brotli)
(_._script("a1", ($scope) => ($scope[0].textContent = $scope[2].bar())),
  _._resume("a0", function ($scope) {
    return () => $scope[1]?.bar;
  }),
  init());
