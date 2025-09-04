// size: 193 (min) 160 (brotli)
const $bar__OR__fooChange__script = _._script(
    "a1",
    ($scope, { 3: bar, 6: $fooChange }) =>
      _._on($scope[0], "click", function () {
        $fooChange(bar + 1);
      }),
  ),
  $bar__OR__fooChange = _._or(7, $bar__OR__fooChange__script),
  $bar = _._let(3, ($scope, bar) => {
    (_._text($scope[2], bar), $bar__OR__fooChange($scope));
  });
(_._resume("a0", function ($scope) {
  return function (v) {
    $bar($scope, v);
  };
}),
  init());
