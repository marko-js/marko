// size: 289 (min) 174 (brotli)
const $x__OR__direction__script = _._script("a0", ($scope) =>
    _._on($scope[2], "click", function () {
      "up" === $scope[5]
        ? $x($scope, $scope[4] + 1)
        : "down" === $scope[5] && $x($scope, $scope[4] - 1);
    }),
  ),
  $x__OR__direction = _._or(6, $x__OR__direction__script),
  $x = _._let(4, ($scope) => {
    (_._text($scope[3], $scope[4]), $x__OR__direction($scope));
  }),
  $direction = _._let(5, $x__OR__direction);
(_._script("a1", ($scope) => {
  (_._on($scope[0], "click", function () {
    $direction($scope, "up");
  }),
    _._on($scope[1], "click", function () {
      $direction($scope, "down");
    }));
}),
  init());
