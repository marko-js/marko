// size: 278 (min) 159 (brotli)
const $multipliedCount = _._const(7, ($scope) => _._text($scope[3], $scope[7])),
  $count__OR__multiplier = _._or(6, ($scope) =>
    $multipliedCount($scope, $scope[4] * $scope[5]),
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope[2], "click", function () {
      $count($scope, $scope[4] + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($count__OR__multiplier($scope), $count__script($scope));
  }),
  $multiplier__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $multiplier($scope, $scope[5] + 1);
    }),
  ),
  $multiplier = _._let(5, ($scope) => {
    (_._text($scope[1], $scope[5]),
      $count__OR__multiplier($scope),
      $multiplier__script($scope));
  });
init();
