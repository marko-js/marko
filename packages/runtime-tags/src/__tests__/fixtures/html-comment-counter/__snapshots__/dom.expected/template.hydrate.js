// size: 162 (min) 127 (brotli)
const $count_effect = _$.effect("a0", ($scope, { 3: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(3, ($scope, count) => {
    _$.data($scope[1], count),
      _$.data($scope[2], `${count} + ${count} = ${count + count}`),
      $count_effect($scope);
  });
init();
