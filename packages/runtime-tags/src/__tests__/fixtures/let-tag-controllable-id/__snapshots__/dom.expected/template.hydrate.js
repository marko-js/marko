// size: 284 (min) 172 (brotli)
const $y_effect = _$.effect("a1", ($scope, { 6: y }) =>
    _$.on($scope[0], "click", function () {
      $y($scope, y + 1);
    }),
  ),
  $y = _$.state(6, ($scope, y) => {
    _$.data($scope[2], y), $y_effect($scope);
  }),
  $expr_x_handler = _$.intersection(5, ($scope) => {
    const { 3: x, 4: handler } = $scope;
    $y($scope, x, handler);
  }),
  $x = _$.state(3, ($scope, x) => {
    _$.data($scope[1], x), $expr_x_handler($scope);
  });
_$.register("a0", function ($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}),
  init();
