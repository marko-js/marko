// size: 268 (min) 168 (brotli)
const $multipliedCount = _._const(7, ($scope) => _._text($scope.d, $scope.h)),
  $count__OR__multiplier = _._or(6, ($scope) =>
    $multipliedCount($scope, $scope.e * $scope.f),
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope.c, "click", function () {
      $count($scope, $scope.e + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($count__OR__multiplier($scope), $count__script($scope));
  }),
  $multiplier__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $multiplier($scope, $scope.f + 1);
    }),
  ),
  $multiplier = _._let(5, ($scope) => {
    (_._text($scope.b, $scope.f),
      $count__OR__multiplier($scope),
      $multiplier__script($scope));
  });
init();
