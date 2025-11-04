// size: 246 (min) 127 (brotli)
const $await_content3__count = _._closure_get(4, ($scope) =>
    _._text($scope.b, $scope._.e),
  ),
  $await_content2__count = _._closure_get(4, ($scope) =>
    _._text($scope.b, $scope._.e),
  ),
  $await_content__count = _._closure_get(4, ($scope) =>
    _._text($scope.b, $scope._.e),
  ),
  $count__closure = _._closure(
    $await_content__count,
    $await_content2__count,
    $await_content3__count,
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope.d, "click", function () {
      $count($scope, $scope.e + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($count__closure($scope), $count__script($scope));
  });
init();
