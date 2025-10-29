// size: 110 (min) 103 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", () => {
      $count($scope, $scope[2] + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text($scope[1], $scope[2]), $count__script($scope));
  });
init();
