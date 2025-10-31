// size: 116 (min) 104 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $count($scope, $scope[2] + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text($scope[0], $scope[2]), $count__script($scope));
  });
init();
