// size: 303 (min) 186 (brotli)
const $bar = _._let(3, ($scope) => {
    (_._text($scope.c, $scope.d),
      (($scope, $pattern) => {
        ($foo2($scope, $pattern.foo), $fooChange2($scope, $pattern.fooChange));
      })($scope, { foo: $scope.d, fooChange: $foo($scope) }));
  }),
  $foo__OR__fooChange__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $scope.g($scope.f + 1);
    }),
  ),
  $foo__OR__fooChange = _._or(7, $foo__OR__fooChange__script),
  $foo2 = _._const(5, ($scope) => {
    (_._text($scope.b, $scope.f), $foo__OR__fooChange($scope));
  }),
  $fooChange2 = _._const(6, $foo__OR__fooChange);
function $foo($scope) {
  return function (v) {
    $bar($scope, v);
  };
}
(_._resume("a0", $foo), init());
