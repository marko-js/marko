// size: 138 (min) 102 (brotli)
(_._script("a2", ($scope) => $scope.b()),
  _._resume("a1", function ($scope) {
    return function () {
      $scope.a.innerHTML = $scope._.b();
    };
  }),
  _._resume("a0", function () {
    return "HI";
  }),
  init());
