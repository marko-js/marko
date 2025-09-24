// size: 166 (min) 134 (brotli)
const $child_content__count__script = _._script(
    "b0",
    ($scope, { _: { 1: count } }) =>
      _._on($scope[0], "click", function () {
        $count($scope._, ++count);
      }),
  ),
  $child_content__count = _._closure_get(1, ($scope, count) => {
    (_._text($scope[1], count), $child_content__count__script($scope));
  }),
  $count__closure = _._closure($child_content__count),
  $count = _._let(1, $count__closure);
init();
