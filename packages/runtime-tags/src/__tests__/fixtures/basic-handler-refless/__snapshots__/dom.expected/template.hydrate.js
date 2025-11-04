// size: 99 (min) 95 (brotli)
const $data = _._let(2, ($scope) => _._text($scope.b, $scope.c));
(_._script("a0", ($scope) =>
  _._on($scope.a, "click", function () {
    $data($scope, 1);
  }),
),
  init());
