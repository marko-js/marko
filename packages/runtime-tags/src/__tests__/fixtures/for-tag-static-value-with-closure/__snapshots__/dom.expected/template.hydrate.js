// size: 159 (min) 116 (brotli)
const $for_content__count = _._for_closure(0, ($scope) =>
    _._text($scope.b, $scope._.d),
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope.c, $scope.d),
      $for_content__count($scope),
      $count__script($scope));
  });
init();
