// size: 157 (min) 115 (brotli)
const $MyTag_content__count = _._const(5, ($scope) =>
    _._text($scope.b, $scope.f),
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      $MyTag_content__count($scope.c, $scope.d),
      $count__script($scope));
  });
init();
