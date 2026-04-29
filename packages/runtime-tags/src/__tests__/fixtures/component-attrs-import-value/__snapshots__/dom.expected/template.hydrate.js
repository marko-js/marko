// size: 143 (min) 117 (brotli)
const $input__OR__count = _._or(5, ($scope) =>
    _._text($scope.b, $scope.d.format($scope.e)),
  ),
  $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.e + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($input__OR__count($scope), $count__script($scope));
  });
init();
