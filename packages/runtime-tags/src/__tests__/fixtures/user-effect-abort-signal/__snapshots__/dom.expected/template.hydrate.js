// size: 150 (min) 119 (brotli)
const $a = _._let(5, ($scope) => _._text($scope.a, $scope.f)),
  $b = _._let(6, ($scope) => _._text($scope.b, $scope.g));
(_._script("a0", ($scope) => {
  {
    const previousValue = $a($scope, $scope.e + 1);
    _.$signal($scope, 0).onabort = () => $b($scope, previousValue);
  }
}),
  init());
