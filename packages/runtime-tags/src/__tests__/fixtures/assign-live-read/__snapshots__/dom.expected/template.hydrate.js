// size: 273 (min) 186 (brotli)
const $resetCount2__script = _._script("a1", ($scope) =>
    _._on($scope[2], "click", $scope[4]),
  ),
  $resetCount2 = _._const(4, $resetCount2__script),
  $count__script = _._script("a2", ($scope) => {
    (_._on($scope[0], "click", function () {
      ($count($scope, $scope[3] + 1), $count($scope, $scope[3] + 1));
    }),
      $scope[3]);
  }),
  $count = _._let(3, ($scope) => {
    (_._text($scope[1], $scope[3]),
      $resetCount2($scope, $resetCount($scope)),
      $count__script($scope));
  });
function $resetCount($scope) {
  return function () {
    $scope[3] > 0 && $count($scope, 0);
  };
}
(_._resume("a0", $resetCount), init());
