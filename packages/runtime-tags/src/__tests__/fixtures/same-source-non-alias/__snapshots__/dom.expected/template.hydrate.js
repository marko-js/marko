// size: 215 (min) 148 (brotli)
const $pattern2 = _$.value(4, ($scope, $pattern) => $a($scope, $pattern.a)),
  $count_effect = _$.effect("a0", ($scope, { 3: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _$.state(3, ($scope, count) => {
    ($pattern2($scope, { a: count }), $count_effect($scope));
  }),
  $a = _$.value(5, ($scope, a) => {
    (_$.data($scope[1], a), $b($scope, a));
  }),
  $b = ($scope, b) => {
    _$.data($scope[2], b);
  };
init();
