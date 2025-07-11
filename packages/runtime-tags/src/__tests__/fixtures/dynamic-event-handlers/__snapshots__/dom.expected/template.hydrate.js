// size: 122 (min) 104 (brotli)
const $clickCount_effect = _$.effect("a0", ($scope, { 2: clickCount }) =>
    _$.on(
      $scope[0],
      "click",
      clickCount <= 1 &&
        (() => {
          $clickCount($scope, clickCount + 1);
        }),
    ),
  ),
  $clickCount = _$.state(2, ($scope, clickCount) => {
    (_$.data($scope[1], clickCount), $clickCount_effect($scope));
  });
init();
