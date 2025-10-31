// size: 141 (min) 108 (brotli)
(_._script("a2", ($scope) => $scope[1]()),
  _._resume("a1", function ($scope) {
    return function () {
      $scope[0].innerHTML = $scope._[1]();
    };
  }),
  _._resume("a0", function () {
    return "HI";
  }),
  init());
