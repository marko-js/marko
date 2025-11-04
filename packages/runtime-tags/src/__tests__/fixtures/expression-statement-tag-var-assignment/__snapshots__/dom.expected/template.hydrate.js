// size: 280 (min) 163 (brotli)
const $x__OR__direction__script = _._script("a0", ($scope) =>
    _._on($scope.c, "click", function () {
      "up" === $scope.f
        ? $x($scope, $scope.e + 1)
        : "down" === $scope.f && $x($scope, $scope.e - 1);
    }),
  ),
  $x__OR__direction = _._or(6, $x__OR__direction__script),
  $x = _._let(4, ($scope) => {
    (_._text($scope.d, $scope.e), $x__OR__direction($scope));
  }),
  $direction = _._let(5, $x__OR__direction);
(_._script("a1", ($scope) => {
  (_._on($scope.a, "click", function () {
    $direction($scope, "up");
  }),
    _._on($scope.b, "click", function () {
      $direction($scope, "down");
    }));
}),
  init());
