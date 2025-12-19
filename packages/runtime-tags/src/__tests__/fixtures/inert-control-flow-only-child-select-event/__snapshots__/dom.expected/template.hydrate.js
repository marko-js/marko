// size: 155 (min) 120 (brotli)
const $for_content__selected = _._for_closure(0, ($scope) =>
    _._attr($scope.a, "selected", $scope._.b === $scope.M),
  ),
  $selected = _._let(1, $for_content__selected);
(_._script("a0", ($scope) =>
  _._on($scope.a, "change", function (e) {
    $selected($scope, e.target.value);
  }),
),
  init());
