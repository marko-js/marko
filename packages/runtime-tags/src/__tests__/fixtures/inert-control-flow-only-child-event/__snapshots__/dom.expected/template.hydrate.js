// size: 164 (min) 126 (brotli)
const $for_content__selected = _._for_closure(0, ($scope) =>
    _._attr($scope.a, "data-selected", $scope._.b === $scope.M),
  ),
  $selected__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $selected($scope, $scope.b + 1);
    }),
  ),
  $selected = _._let(1, ($scope) => {
    ($for_content__selected($scope), $selected__script($scope));
  });
init();
