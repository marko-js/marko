// size: 133 (min) 99 (brotli)
const $x_effect = _$.effect("a0", ($scope, { 2: x }) => {
    ($y($scope, x), $x($scope, (x = 2)));
  }),
  $x = _$.state(2, ($scope, x) => {
    (_$.data($scope[0], x), $x_effect($scope));
  }),
  $y = _$.state(3, ($scope, y) => _$.data($scope[1], y));
init();
