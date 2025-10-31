// size: 165 (min) 120 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[3] + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope[1], $scope[3]),
      _._text(
        $scope[2],
        `${$scope[3]} + ${$scope[3]} = ${$scope[3] + $scope[3]}`,
      ),
      $count__script($scope));
  });
init();
