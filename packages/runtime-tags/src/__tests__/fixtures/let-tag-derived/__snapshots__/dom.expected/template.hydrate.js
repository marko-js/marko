// size: 110 (min) 101 (brotli)
const $b__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", () => $b($scope, $scope[6] + 1) - 1),
  ),
  $b = _._let(6, ($scope) => {
    (_._text($scope[2], $scope[6]), $b__script($scope));
  });
init();
