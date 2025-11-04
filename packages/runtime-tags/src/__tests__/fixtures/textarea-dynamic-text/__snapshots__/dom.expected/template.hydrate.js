// size: 122 (min) 95 (brotli)
const $value = _._let(2, ($scope) =>
  _._attr_textarea_value($scope, "a", $scope.c),
);
(_._script("a0", ($scope) =>
  _._on($scope.b, "click", function () {
    $value($scope, "after");
  }),
),
  init());
