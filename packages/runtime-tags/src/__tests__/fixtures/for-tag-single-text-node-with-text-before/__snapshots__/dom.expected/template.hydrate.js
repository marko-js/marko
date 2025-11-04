// size: 216 (min) 155 (brotli)
const $for_content = _._content_branch("Child", "b"),
  $for = _._for_of(1, $for_content),
  $children__script = _._script("a0", ($scope) => {
    1 === $scope.c?.length && $children($scope, [...$scope.c, 2]);
  }),
  $children = _._let(2, ($scope) => {
    ($children_length($scope, $scope.c?.length),
      $for($scope, [$scope.c]),
      $children__script($scope));
  }),
  $children_length = _._const(3, ($scope) =>
    _._attr($scope.a, "data-children", $scope.d),
  );
init();
