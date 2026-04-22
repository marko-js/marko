// size: 130 (min) 114 (brotli)
const $double = ($scope, double) => _._text($scope.b, double),
  $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    ($double($scope, $scope.c * 2), $count__script($scope));
  });
init();
