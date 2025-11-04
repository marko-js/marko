// size: 233 (min) 123 (brotli)
const $count__script = _._script("a0", ($scope) => {
    (_._on($scope.a, "click", function () {
      $count($scope, $scope.g + 2);
    }),
      _._on($scope.c, "click", function () {
        $count($scope, 3 * $scope.g);
      }),
      _._on($scope.e, "click", function () {
        $count($scope, $scope.g ** 3);
      }));
  }),
  $count = _._let(6, ($scope) => {
    (_._text($scope.b, $scope.g),
      _._text($scope.d, $scope.g),
      _._text($scope.f, $scope.g),
      $count__script($scope));
  });
init();
