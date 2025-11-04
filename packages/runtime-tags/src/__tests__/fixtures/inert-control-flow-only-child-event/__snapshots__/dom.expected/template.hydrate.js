// size: 168 (min) 130 (brotli)
const $for_content__selected__OR__i = _._or(4, ($scope) =>
    _._attr($scope.a, "selected", $scope._.b === $scope.d),
  ),
  $for_content__selected = _._for_closure(0, $for_content__selected__OR__i),
  $selected = _._let(1, $for_content__selected);
(_._script("a0", ($scope) =>
  _._on($scope.a, "change", function (e) {
    $selected($scope, e.target.value);
  }),
),
  init());
