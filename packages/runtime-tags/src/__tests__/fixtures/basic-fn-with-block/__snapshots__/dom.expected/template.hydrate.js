// size: 126 (min) 107 (brotli)
const $count_effect = _$.effect("a0", ($scope, { 2: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(2, ($scope, count) => {
    _$.data($scope[1], count), $count_effect($scope);
  });
init();
