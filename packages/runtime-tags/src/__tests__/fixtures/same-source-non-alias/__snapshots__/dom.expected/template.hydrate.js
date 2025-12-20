// size: 183 (min) 133 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    ((($scope, $pattern) => {
      $a($scope, $pattern.a);
    })($scope, { a: $scope.d }),
      $count__script($scope));
  }),
  $a = ($scope, a) => {
    (_._text($scope.b, a), $b($scope, a));
  },
  $b = ($scope, a) => _._text($scope.c, a);
init();
