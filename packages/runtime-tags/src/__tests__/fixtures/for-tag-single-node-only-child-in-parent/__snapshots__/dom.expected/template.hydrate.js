// size: 228 (min) 157 (brotli)
const $for_content = _._content_branch("<div></div>", "b"),
  $for = _._for_of(0, $for_content),
  $children__script = _._script("a0", ($scope) => {
    1 === $scope[1]?.length && $children($scope, [...$scope[1], 2]);
  }),
  $children = _._let(1, ($scope) => {
    ($children_length($scope, $scope[1]?.length),
      $for($scope, [$scope[1]]),
      $children__script($scope));
  }),
  $children_length = _._const(2, ($scope) =>
    _._attr($scope[0], "data-children", $scope[2]),
  );
init();
