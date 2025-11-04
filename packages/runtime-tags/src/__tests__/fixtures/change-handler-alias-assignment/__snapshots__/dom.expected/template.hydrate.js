// size: 134 (min) 95 (brotli)
(_._script("a1", ($scope) =>
  _._on($scope.a, "click", function () {
    $scope.c("After");
  }),
),
  _._resume("a0", function ($scope) {
    return function (v) {
      $scope.a.textContent = v;
    };
  }),
  init());
