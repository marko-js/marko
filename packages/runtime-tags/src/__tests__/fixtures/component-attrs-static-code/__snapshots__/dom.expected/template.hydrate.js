// size: 268 (min) 168 (brotli)
const $input__OR__count = _._or(5, ($scope) => {
    let { 3: input, 4: count } = $scope;
    _._text($scope[1], input.format(count));
  }),
  $count__script = _._script("a0", ($scope, { 4: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($input__OR__count($scope), $count__script($scope));
  });
(_._resume("b0", function (n) {
  return "$" + n.toFixed(2);
}),
  _._resume("b1", function (n) {
    return "$" + n.toFixed(2);
  }),
  init());
