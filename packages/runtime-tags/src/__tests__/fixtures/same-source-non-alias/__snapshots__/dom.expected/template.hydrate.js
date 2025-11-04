// size: 205 (min) 155 (brotli)
const $pattern2 = _._const(4, ($scope) => $a($scope, $scope.e.a)),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    ($pattern2($scope, { a: $scope.d }), $count__script($scope));
  }),
  $a = _._const(5, ($scope) => {
    (_._text($scope.b, $scope.f), $b($scope, $scope.f));
  }),
  $b = ($scope) => {
    _._text($scope.c, $scope.f);
  };
init();
