// size: 181 (min) 141 (brotli)
const $bar__OR__$fooChange__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $scope.g($scope.d + 1);
    }),
  ),
  $bar__OR__$fooChange = _._or(7, $bar__OR__$fooChange__script),
  $bar = _._let(3, ($scope) => {
    (_._text($scope.c, $scope.d), $bar__OR__$fooChange($scope));
  });
(_._resume("a0", function ($scope) {
  return function (v) {
    $bar($scope, v);
  };
}),
  init());
