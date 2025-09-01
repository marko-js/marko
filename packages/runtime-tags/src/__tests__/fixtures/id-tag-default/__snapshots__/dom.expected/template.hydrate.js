// size: 315 (min) 182 (brotli)
const $sometimesBar = _$.value(8, ($scope, sometimesBar) =>
    _$.attr($scope[2], "id", sometimesBar),
  ),
  $expr_bar_baz_effect = _$.effect("a0", ($scope, { 4: bar, 5: baz }) =>
    _$.on($scope[0], "click", function () {
      ($bar($scope, (bar = bar ? null : "bar")),
        $baz($scope, (baz = baz ? null : "baz")));
    }),
  ),
  $expr_bar_baz = _$.intersection(6, $expr_bar_baz_effect),
  $bar = _$.state(4, ($scope, bar) => {
    ($sometimesBar($scope, bar ?? _$.nextTagId($scope)), $expr_bar_baz($scope));
  }),
  $sometimesBaz = _$.value(9, ($scope, sometimesBaz) =>
    _$.attr($scope[3], "id", sometimesBaz),
  ),
  $baz = _$.state(5, ($scope, baz) => {
    ($sometimesBaz($scope, baz ?? _$.nextTagId($scope)), $expr_bar_baz($scope));
  });
init();
