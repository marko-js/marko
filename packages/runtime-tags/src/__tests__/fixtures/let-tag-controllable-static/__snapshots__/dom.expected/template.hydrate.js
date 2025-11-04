// size: 221 (min) 154 (brotli)
const $y__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $y($scope, $scope.e + 1);
    }),
  ),
  $y = _._let(4, ($scope) => {
    (_._text($scope.c, $scope.e), $y__script($scope));
  }),
  $x = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d), $y($scope, $scope.d, $valueChange($scope)));
  });
function $valueChange($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}
(_._resume("a0", $valueChange), init());
