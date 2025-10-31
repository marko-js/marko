// size: 221 (min) 153 (brotli)
const $for_content__selected__OR__num = _._or(4, ($scope) => {
  (_._attr($scope[0], "data-selected", $scope._[1] === $scope[3]),
    _._attr($scope[0], "data-multiple", $scope[3] % $scope._[1] === 0));
});
_._script("a0", ($scope) =>
  _._on($scope[0], "click", function () {
    $selected($scope._, $scope[3]);
  }),
);
const $for_content__selected = _._for_closure(
    0,
    $for_content__selected__OR__num,
  ),
  $selected = _._let(1, $for_content__selected);
init();
