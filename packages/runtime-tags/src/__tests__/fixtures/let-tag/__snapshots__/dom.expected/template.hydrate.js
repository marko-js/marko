// size: 193 (min) 139 (brotli)
const $expr_x_y_effect = _$.effect("a0", ($scope, { 3: x, 4: y }) =>
    _$.on($scope[0], "click", () => $x($scope, $y($scope, x + y))),
  ),
  $expr_x_y = _$.intersection(5, $expr_x_y_effect),
  $x = _$.state(3, ($scope, x) => {
    _$.data($scope[1], x), $expr_x_y($scope);
  }),
  $y = _$.state(4, ($scope, y) => {
    _$.data($scope[2], y), $expr_x_y($scope);
  });
init();
