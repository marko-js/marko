// size: 254 (min) 145 (brotli)
const $await_content3__count = _._closure_get(4, ($scope) =>
    _._text($scope[1], $scope._[4]),
  ),
  $await_content2__count = _._closure_get(4, ($scope) =>
    _._text($scope[1], $scope._[4]),
  ),
  $await_content__count = _._closure_get(4, ($scope) =>
    _._text($scope[1], $scope._[4]),
  ),
  $count__closure = _._closure(
    $await_content__count,
    $await_content2__count,
    $await_content3__count,
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope[3], "click", function () {
      $count($scope, $scope[4] + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($count__closure($scope), $count__script($scope));
  });
init();
