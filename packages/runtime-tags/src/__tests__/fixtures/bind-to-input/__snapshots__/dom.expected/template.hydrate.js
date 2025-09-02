// size: 416 (min) 223 (brotli)
const $x_effect = _$.effect("a0", ($scope, { 9: x }) =>
    _$.on($scope[0], "click", function () {
      $x$1($scope, ++x);
    }),
  ),
  $x$1 = _$.state(9, ($scope, x) => {
    (_$.attr($scope[0], "data-internal", x), $x_effect($scope));
  }),
  $expr_$countChange_count = _$.intersection(8, ($scope) => {
    let { 6: $countChange, 7: count } = $scope;
    $x$1($scope, count, $countChange);
  }),
  $count = _$.value(7, $expr_$countChange_count),
  $x$counter$content2 = _$.dynamicClosureRead(2, ($scope, x) =>
    _$.data($scope[0], x),
  ),
  $x$counter$content = _$.dynamicClosureRead(2, ($scope, x) =>
    _$.data($scope[0], x),
  ),
  $x_closure = _$.dynamicClosure($x$counter$content, $x$counter$content2),
  $x = _$.state(2, ($scope, x) => {
    ($count($scope[0], x), $count($scope[1], x), $x_closure($scope));
  });
(_$.register("b0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
}),
  init());
