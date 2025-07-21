// size: 135 (min) 108 (brotli)
const $y$define$content_effect = _$.effect("a1", ($scope, { 7: y }) =>
    _$.on($scope[2], "click", function () {
      $y$define$content($scope, ++y);
    }),
  ),
  $y$define$content = _$.state(7, ($scope, y) => {
    (_$.data($scope[1], y),
      _$.data($scope[3], y),
      $y$define$content_effect($scope));
  });
init();
