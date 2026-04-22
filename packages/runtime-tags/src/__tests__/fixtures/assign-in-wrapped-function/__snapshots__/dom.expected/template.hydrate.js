// size: 132 (min) 106 (brotli)
function identity(fn) {
  return fn;
}
const $count__script = _._script(`a0`, ($scope) =>
    _._on(
      $scope.a,
      `click`,
      identity(() => {
        $count($scope, $scope.c + 1);
      }),
    ),
  ),
  $count = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c), $count__script($scope));
  });
init();
