// size: 122 (min) 98 (brotli)
const $value = _._let(2, ($scope) =>
  _._attr_textarea_value($scope, 0, $scope[2]),
);
(_._script("a0", ($scope) =>
  _._on($scope[1], "click", function () {
    $value($scope, "after");
  }),
),
  init());
