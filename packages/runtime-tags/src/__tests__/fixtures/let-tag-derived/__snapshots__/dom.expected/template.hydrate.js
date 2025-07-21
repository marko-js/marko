// size: 118 (min) 106 (brotli)
const $b_effect = _$.effect("a0", ($scope, { 6: b }) =>
    _$.on($scope[0], "click", () => ($b($scope, ++b), b - 1)),
  ),
  $b = _$.state(6, ($scope, b) => {
    (_$.data($scope[2], b), $b_effect($scope));
  });
init();
