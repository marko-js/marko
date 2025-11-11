// size: 199 (min) 145 (brotli)
const $for = _._for_of(0, "<div></div>", "b"),
  $children__script = _._script("a0", ($scope) => {
    1 === $scope.b?.length && $children($scope, [...$scope.b, 2]);
  }),
  $children = _._let(1, ($scope) => {
    ($children_length($scope, $scope.b?.length),
      $for($scope, [$scope.b]),
      $children__script($scope));
  }),
  $children_length = _._const(2, ($scope) =>
    _._attr($scope.a, "data-children", $scope.c),
  );
init();
