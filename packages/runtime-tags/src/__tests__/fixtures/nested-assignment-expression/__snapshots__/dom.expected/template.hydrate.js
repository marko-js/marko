// size: 188 (min) 125 (brotli)
const $clickCount__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $lastCount2(
        $scope,
        $lastCount($scope, $clickCount($scope, $scope.e + 1) - 1),
      );
    }),
  ),
  $clickCount = _._let(4, ($scope) => {
    (_._text($scope.b, $scope.e), $clickCount__script($scope));
  }),
  $lastCount = _._let(5, ($scope) => _._text($scope.c, $scope.f)),
  $lastCount2 = _._let(6, ($scope) => _._text($scope.d, $scope.g));
init();
