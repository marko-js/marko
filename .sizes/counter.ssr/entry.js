// size: 106 (min) 97 (brotli)
const $clickCount_effect = effect("a0", ($scope, { 2: clickCount }) =>
    on($scope[0], "click", function () {
      $clickCount($scope, ++clickCount);
    }),
  ),
  $clickCount = state(2, ($scope, clickCount) => {
    (data($scope[1], clickCount), $clickCount_effect($scope));
  });
init();
