// size: 162 (min) 123 (brotli)
const $clickCount_effect = _$.effect("a0", ($scope, { 3: clickCount }) =>
    _$.on($scope[0], "click", function () {
      ($lastClickCount($scope, clickCount), $clickCount($scope, ++clickCount));
    }),
  ),
  $clickCount = _$.state(3, ($scope, clickCount) => {
    (_$.data($scope[1], clickCount), $clickCount_effect($scope));
  }),
  $lastClickCount = _$.state(4, ($scope, lastClickCount) =>
    _$.data($scope[2], lastClickCount),
  );
init();
