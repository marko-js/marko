// size: 229 (min) 108 (brotli)
(_._script("a0", ($scope) => $scope.b.action()),
  _._script("b2", ($scope) => ($scope.b.innerHTML = "works")),
  _._resume("b1", function ($scope) {
    return function () {
      $scope.b.classList.add("child2");
    };
  }),
  _._resume("b0", function ($scope) {
    return function () {
      $scope.b.classList.add("child1");
    };
  }),
  init());
