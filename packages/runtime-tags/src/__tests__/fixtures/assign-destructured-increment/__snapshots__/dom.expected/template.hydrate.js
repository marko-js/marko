// size: 327 (min) 201 (brotli)
const $pattern2 = _._const(4, ($scope) => {
    ($foo2($scope, $scope[4].foo), $fooChange2($scope, $scope[4].fooChange));
  }),
  $bar = _._let(3, ($scope) => {
    (_._text($scope[2], $scope[3]),
      $pattern2($scope, { foo: $scope[3], fooChange: $foo($scope) }));
  }),
  $foo__OR__fooChange__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $scope[6]($scope[5] + 1);
    }),
  ),
  $foo__OR__fooChange = _._or(7, $foo__OR__fooChange__script),
  $foo2 = _._const(5, ($scope) => {
    (_._text($scope[1], $scope[5]), $foo__OR__fooChange($scope));
  }),
  $fooChange2 = _._const(6, $foo__OR__fooChange);
function $foo($scope) {
  return function (v) {
    $bar($scope, v);
  };
}
(_._resume("a0", $foo), init());
