// size: 120 (min) 102 (brotli)
const $clickCount_effect = _$.effect("a0", ($scope, { 2: clickCount }) =>
    _$.on($scope[0], "click", function () {
      $clickCount($scope, ++clickCount);
    }),
  ),
  $clickCount = _$.state(2, ($scope, clickCount) => {
    (_$.data($scope[1], clickCount), $clickCount_effect($scope));
  });
init();
