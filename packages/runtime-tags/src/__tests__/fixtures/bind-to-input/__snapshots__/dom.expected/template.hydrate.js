// size: 365 (min) 204 (brotli)
const $x__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $x$1($scope, $scope.j + 1);
    }),
  ),
  $x$1 = _._let(9, ($scope) => {
    (_._attr($scope.a, "data-internal", $scope.j), $x__script($scope));
  }),
  $countChange__OR__count = _._or(8, ($scope) =>
    $x$1($scope, $scope.h, $scope.g),
  ),
  $count = _._const(7, $countChange__OR__count),
  $counter_content2__x = _._closure_get(2, ($scope) =>
    _._text($scope.a, $scope._.c),
  ),
  $counter_content__x = _._closure_get(2, ($scope) =>
    _._text($scope.a, $scope._.c),
  ),
  $x__closure = _._closure($counter_content__x, $counter_content2__x),
  $x = _._let(2, ($scope) => {
    ($count($scope.a, $scope.c),
      $count($scope.b, $scope.c),
      $x__closure($scope));
  });
(_._resume("b0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
}),
  init());
