// size: 330 (min) 206 (brotli)
const $pattern2 = _._const(4, ($scope, $pattern) => {
    ($foo2($scope, $pattern.foo), $fooChange2($scope, $pattern.fooChange));
  }),
  $bar = _._let(3, ($scope, bar) => {
    (_._text($scope[2], bar),
      $pattern2($scope, { foo: bar, fooChange: $foo($scope) }));
  }),
  $foo__OR__fooChange__script = _._script(
    "a1",
    ($scope, { 5: foo, 6: $fooChange }) =>
      _._on($scope[0], "click", function () {
        $fooChange(++foo);
      }),
  ),
  $foo__OR__fooChange = _._or(7, $foo__OR__fooChange__script),
  $foo2 = _._const(5, ($scope, foo) => {
    (_._text($scope[1], foo), $foo__OR__fooChange($scope));
  }),
  $fooChange2 = _._const(6, $foo__OR__fooChange);
function $foo($scope) {
  return function (v) {
    $bar($scope, v);
  };
}
(_._resume("a0", $foo), init());
