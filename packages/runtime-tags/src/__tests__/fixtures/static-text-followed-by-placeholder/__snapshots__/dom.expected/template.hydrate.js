// size: 120 (min) 102 (brotli)
const $count_effect = _$.effect("a0", ($scope, { 2: count }) =>
    _$.on($scope[1], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _$.state(2, ($scope, count) => {
    (_$.data($scope[0], count), $count_effect($scope));
  });
init();
