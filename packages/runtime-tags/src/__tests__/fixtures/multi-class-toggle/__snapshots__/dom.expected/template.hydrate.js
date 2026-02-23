// size: 158 (min) 130 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._attr_class($scope.a, { "a b c": !0, "d e f": $scope.c % 2 }),
      _._text($scope.b, $scope.c),
      $count__script($scope));
  });
init();
