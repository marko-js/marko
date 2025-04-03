// size: 170 (min) 117 (brotli)
const $lastClickCount = _$.state(4, ($scope, lastClickCount) =>
    _$.data($scope[2], lastClickCount),
  ),
  $clickCount_effect = _$.effect("a0", ($scope, { 3: clickCount }) =>
    _$.on($scope[0], "click", function () {
      $lastClickCount($scope, clickCount), $clickCount($scope, clickCount + 1);
    }),
  ),
  $clickCount = _$.state(3, ($scope, clickCount) => {
    _$.data($scope[1], clickCount), $clickCount_effect($scope);
  });
init();
