// size: 171 (min) 128 (brotli)
const $x__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $x($scope, $scope.c + 1);
    }),
  ),
  $x = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c),
      _._return($scope, $scope.c),
      $x__script($scope));
  });
(_._var_resume("b0", ($scope, data) => _._text($scope.c, data)), init());
