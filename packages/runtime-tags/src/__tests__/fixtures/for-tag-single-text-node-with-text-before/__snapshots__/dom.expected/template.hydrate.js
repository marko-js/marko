// size: 222 (min) 157 (brotli)
const $for_content = _._content_branch("Child", "b"),
  $for = _._for_of(1, $for_content),
  $children__script = _._script("a0", ($scope) => {
    1 === $scope[2]?.length && $children($scope, [...$scope[2], 2]);
  }),
  $children = _._let(2, ($scope) => {
    ($children_length($scope, $scope[2]?.length),
      $for($scope, [$scope[2]]),
      $children__script($scope));
  }),
  $children_length = _._const(3, ($scope) =>
    _._attr($scope[0], "data-children", $scope[3]),
  );
init();
