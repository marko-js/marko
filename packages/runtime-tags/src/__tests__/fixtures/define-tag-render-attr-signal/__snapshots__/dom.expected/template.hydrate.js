// size: 157 (min) 112 (brotli)
const $MyTag_content__number = _._const(3, ($scope) =>
    _._text($scope.a, $scope.d),
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $x($scope, $scope.d + 1);
    }),
  ),
  $x = _._let(3, ($scope) => {
    ($MyTag_content__number($scope.a, $scope.d),
      _._text($scope.c, $scope.d),
      $x__script($scope));
  });
init();
