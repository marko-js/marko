// size: 291 (min) 177 (brotli)
const $expr_input_count = _$.intersection(5, ($scope) => {
    const { 3: input, 4: count } = $scope;
    _$.data($scope[1], input.format(count));
  }),
  $count_effect = _$.effect("a0", ($scope, { 4: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(4, ($scope) => {
    $expr_input_count($scope), $count_effect($scope);
  });
_$.register("b0", function (n) {
  return "$" + n.toFixed(2);
}),
  _$.register("b1", function (n) {
    return "$" + n.toFixed(2);
  }),
  init();
