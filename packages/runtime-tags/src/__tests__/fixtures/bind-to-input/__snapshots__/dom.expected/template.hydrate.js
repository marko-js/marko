// size: 392 (min) 225 (brotli)
const $x__script = _._script("a0", ($scope, { 9: x }) =>
    _._on($scope[0], "click", function () {
      $x$1($scope, ++x);
    }),
  ),
  $x$1 = _._let(9, ($scope, x) => {
    (_._attr($scope[0], "data-internal", x), $x__script($scope));
  }),
  $countChange__OR__count = _._or(8, ($scope) => {
    let { 6: $countChange, 7: count } = $scope;
    $x$1($scope, count, $countChange);
  }),
  $count = _._const(7, $countChange__OR__count),
  $counter_content2__x = _._closure_get(2, ($scope, x) =>
    _._text($scope[0], x),
  ),
  $counter_content__x = _._closure_get(2, ($scope, x) => _._text($scope[0], x)),
  $x__closure = _._closure($counter_content__x, $counter_content2__x),
  $x = _._let(2, ($scope, x) => {
    ($count($scope[0], x), $count($scope[1], x), $x__closure($scope));
  });
(_._resume("b0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
}),
  init());
