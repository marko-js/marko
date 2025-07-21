// size: 158 (min) 121 (brotli)
const $clickCount_effect = _$.effect("a0", ($scope, { 4: clickCount }) =>
    _$.on($scope[0], "click", function () {
      (($scope[2].innerHTML =
        ($clickCount($scope, ++clickCount), clickCount - 1)),
        ($scope[3].innerHTML = clickCount));
    }),
  ),
  $clickCount = _$.state(4, ($scope, clickCount) => {
    (_$.data($scope[1], clickCount), $clickCount_effect($scope));
  });
init();
