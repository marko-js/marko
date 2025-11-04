// size: 135 (min) 82 (brotli)
(_._script("a0", ($scope) => $scope.c(1)),
  _._resume("b1", function ($scope) {
    return function () {
      $scope._.b();
    };
  }),
  _._resume("b0", function ($scope) {
    return function () {};
  }),
  init());
