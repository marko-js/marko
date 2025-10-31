// size: 137 (min) 83 (brotli)
(_._script("a0", ($scope) => $scope[2](1)),
  _._resume("b1", function ($scope) {
    return function () {
      $scope._[1]();
    };
  }),
  _._resume("b0", function ($scope) {
    return function () {};
  }),
  init());
