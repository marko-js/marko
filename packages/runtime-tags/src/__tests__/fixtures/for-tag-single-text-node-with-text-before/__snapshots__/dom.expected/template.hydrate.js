// size: 193 (min) 141 (brotli)
const $for = _._for_of(1, `Child`, `b`),
  $children__script = _._script(`a0`, ($scope) => {
    $scope.c?.length === 1 && $children($scope, [...$scope.c, 2]);
  }),
  $children = _._let(2, ($scope) => {
    ($children_length($scope, $scope.c?.length),
      $for($scope, [$scope.c]),
      $children__script($scope));
  }),
  $children_length = _._const(3, ($scope) =>
    _._attr($scope.a, `data-children`, $scope.d),
  );
init();
