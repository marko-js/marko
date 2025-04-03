// size: 137 (min) 99 (brotli)
const $y = _$.state(3, ($scope, y) => _$.data($scope[1], y)),
  $x_effect = _$.effect("a0", ($scope, { 2: x }) => {
    $y($scope, x), $x($scope, 2);
  }),
  $x = _$.state(2, ($scope, x) => {
    _$.data($scope[0], x), $x_effect($scope);
  });
init();
