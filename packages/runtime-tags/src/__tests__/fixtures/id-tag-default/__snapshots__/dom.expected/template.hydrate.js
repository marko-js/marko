// size: 275 (min) 173 (brotli)
const $sometimesBar = _._const(8, ($scope) =>
    _._attr($scope.c, "id", $scope.i),
  ),
  $bar__OR__baz__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      ($bar($scope, $scope.e ? null : "bar"),
        $baz($scope, $scope.f ? null : "baz"));
    }),
  ),
  $bar__OR__baz = _._or(6, $bar__OR__baz__script),
  $bar = _._let(4, ($scope) => {
    ($sometimesBar($scope, $scope.e || _._id($scope)), $bar__OR__baz($scope));
  }),
  $sometimesBaz = _._const(9, ($scope) => _._attr($scope.d, "id", $scope.j)),
  $baz = _._let(5, ($scope) => {
    ($sometimesBaz($scope, $scope.f || _._id($scope)), $bar__OR__baz($scope));
  });
init();
