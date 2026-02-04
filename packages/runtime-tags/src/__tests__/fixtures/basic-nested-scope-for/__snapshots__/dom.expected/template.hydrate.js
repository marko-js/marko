// size: 213 (min) 150 (brotli)
const $for_content__selected__OR__num = _._or(4, ($scope) => {
    (_._attr($scope.a, "data-selected", $scope._.b === $scope.d),
      _._attr($scope.a, "data-multiple", $scope.d % $scope._.b === 0));
  }),
  $for_content__selected = _._for_closure(0, $for_content__selected__OR__num);
_._script("a0", ($scope) =>
  _._on($scope.a, "click", function () {
    $selected($scope._, $scope.d);
  }),
);
const $selected = _._let(1, $for_content__selected);
init();
