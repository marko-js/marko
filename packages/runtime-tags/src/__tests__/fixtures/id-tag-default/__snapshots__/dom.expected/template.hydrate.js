// size: 298 (min) 182 (brotli)
const $sometimesBar = _._const(8, ($scope, sometimesBar) =>
    _._attr($scope[2], "id", sometimesBar),
  ),
  $bar__OR__baz__script = _._script("a0", ($scope, { 4: bar, 5: baz }) =>
    _._on($scope[0], "click", function () {
      ($bar($scope, (bar = bar ? null : "bar")),
        $baz($scope, (baz = baz ? null : "baz")));
    }),
  ),
  $bar__OR__baz = _._or(6, $bar__OR__baz__script),
  $bar = _._let(4, ($scope, bar) => {
    ($sometimesBar($scope, bar || _._id($scope)), $bar__OR__baz($scope));
  }),
  $sometimesBaz = _._const(9, ($scope, sometimesBaz) =>
    _._attr($scope[3], "id", sometimesBaz),
  ),
  $baz = _._let(5, ($scope, baz) => {
    ($sometimesBaz($scope, baz || _._id($scope)), $bar__OR__baz($scope));
  });
init();
