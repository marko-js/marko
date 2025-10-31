// size: 186 (min) 139 (brotli)
const $bar__OR__fooChange__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $scope[6]($scope[3] + 1);
    }),
  ),
  $bar__OR__fooChange = _._or(7, $bar__OR__fooChange__script),
  $bar = _._let(3, ($scope) => {
    (_._text($scope[2], $scope[3]), $bar__OR__fooChange($scope));
  });
(_._resume("a0", function ($scope) {
  return function (v) {
    $bar($scope, v);
  };
}),
  init());
