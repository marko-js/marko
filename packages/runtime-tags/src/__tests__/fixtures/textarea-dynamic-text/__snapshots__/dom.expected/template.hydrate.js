// size: 123 (min) 100 (brotli)
const $value = _._let(2, ($scope, value) =>
  _._attr_textarea_value($scope, 0, value),
);
(_._script("a0", ($scope) =>
  _._on($scope[1], "click", function () {
    $value($scope, "after");
  }),
),
  init());
