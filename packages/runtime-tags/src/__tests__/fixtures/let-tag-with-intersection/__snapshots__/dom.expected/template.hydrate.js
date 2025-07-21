// size: 306 (min) 178 (brotli)
const $a = _$.value(9, ($scope, a) => _$.data($scope[4], a)),
  $expr_y_z = _$.intersection(8, ($scope) => {
    const { 6: y, 7: z } = $scope;
    $a($scope, y + z);
  }),
  $y = _$.value(6, ($scope, y) => {
    (_$.data($scope[2], y), $expr_y_z($scope));
  }),
  $z = _$.value(7, ($scope, z) => {
    (_$.data($scope[3], z), $expr_y_z($scope));
  }),
  $x_effect = _$.effect("a0", ($scope, { 5: x }) =>
    _$.on($scope[0], "click", () => ($x($scope, ++x), x - 1)),
  ),
  $x = _$.state(5, ($scope, x) => {
    (_$.data($scope[1], x),
      $y($scope, x + 1),
      $z($scope, x + 2),
      $x_effect($scope));
  });
init();
