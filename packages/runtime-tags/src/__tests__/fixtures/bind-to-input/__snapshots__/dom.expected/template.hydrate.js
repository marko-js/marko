// size: 379 (min) 215 (brotli)
const $x__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $x$1($scope, $scope[9] + 1);
    }),
  ),
  $x$1 = _._let(9, ($scope) => {
    (_._attr($scope[0], "data-internal", $scope[9]), $x__script($scope));
  }),
  $countChange__OR__count = _._or(8, ($scope) =>
    $x$1($scope, $scope[7], $scope[6]),
  ),
  $count = _._const(7, $countChange__OR__count),
  $counter_content2__x = _._closure_get(2, ($scope) =>
    _._text($scope[0], $scope._[2]),
  ),
  $counter_content__x = _._closure_get(2, ($scope) =>
    _._text($scope[0], $scope._[2]),
  ),
  $x__closure = _._closure($counter_content__x, $counter_content2__x),
  $x = _._let(2, ($scope) => {
    ($count($scope[0], $scope[2]),
      $count($scope[1], $scope[2]),
      $x__closure($scope));
  });
(_._resume("b0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
}),
  init());
