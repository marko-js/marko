// size: 201 (min) 142 (brotli)
const $expr_bar_$fooChange_effect = _$.effect(
    "a1",
    ($scope, { 3: bar, 6: $fooChange }) =>
      _$.on($scope[0], "click", function () {
        $fooChange(bar + 1);
      }),
  ),
  $expr_bar_$fooChange = _$.intersection(7, $expr_bar_$fooChange_effect),
  $bar = _$.state(3, ($scope, bar) => {
    (_$.data($scope[2], bar), $expr_bar_$fooChange($scope));
  });
(_$.register("a0", function ($scope) {
  return function (v) {
    $bar($scope, v);
  };
}),
  init());
