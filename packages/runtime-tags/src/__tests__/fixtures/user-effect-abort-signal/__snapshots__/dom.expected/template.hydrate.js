// size: 155 (min) 123 (brotli)
const $a = _._let(5, ($scope) => _._text($scope[0], $scope[5])),
  $b = _._let(6, ($scope) => _._text($scope[1], $scope[6]));
(_._script("a0", ($scope) => {
  {
    const previousValue = $a($scope, $scope[4] + 1);
    _.$signal($scope, 0).onabort = () => $b($scope, previousValue);
  }
}),
  init());
