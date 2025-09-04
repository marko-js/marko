// size: 256 (min) 134 (brotli)
const $await_content3__count = _._closure_get(4, ($scope, count) =>
    _._text($scope[1], count),
  ),
  $await_content2__count = _._closure_get(4, ($scope, count) =>
    _._text($scope[1], count),
  ),
  $await_content__count = _._closure_get(4, ($scope, count) =>
    _._text($scope[1], count),
  ),
  $count__closure = _._closure(
    $await_content__count,
    $await_content2__count,
    $await_content3__count,
  ),
  $count__script = _._script("a0", ($scope, { 4: count }) =>
    _._on($scope[3], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($count__closure($scope), $count__script($scope));
  });
init();
