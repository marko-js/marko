// size: 168 (min) 129 (brotli)
const $count$for$content = _$.loopClosure(3, 0, ($scope, count) =>
    _$.data($scope[1], count),
  ),
  $count_effect = _$.effect("a0", ($scope, { 3: count }) =>
    _$.on($scope[1], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(3, ($scope, count) => {
    (_$.data($scope[2], count),
      $count$for$content($scope),
      $count_effect($scope));
  });
init();
