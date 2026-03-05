// size: 101 (min) 93 (brotli)
const $value = _._let(2, ($scope) => _._text($scope.b, $scope.c));
(_._script("a0", ($scope) =>
  _._on($scope.a, "click", () => {
    $value($scope, "updated");
  }),
),
  init());
