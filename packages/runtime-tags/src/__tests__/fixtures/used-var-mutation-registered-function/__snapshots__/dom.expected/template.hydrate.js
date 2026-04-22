// size: 111 (min) 94 (brotli)
const identity = (fn) => fn,
  $value = _._let(2, ($scope) => _._text($scope.b, $scope.c));
(_._script(`a0`, ($scope) =>
  _._on(
    $scope.a,
    `click`,
    identity(() => {
      $value($scope, `updated`);
    }),
  ),
),
  init());
