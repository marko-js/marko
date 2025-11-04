// size: 137 (min) 106 (brotli)
(_._script("a1", ($scope) =>
  _._on($scope[0], "click", function () {
    $scope[2]("After");
  }),
),
  _._resume("a0", function ($scope) {
    return function (v) {
      $scope[0].textContent = v;
    };
  }),
  init());
