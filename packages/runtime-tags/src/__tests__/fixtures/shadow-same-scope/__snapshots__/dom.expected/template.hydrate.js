// size: 478 (min) 179 (brotli)
const $count7_effect = _$.effect("a0", ($scope, { 11: $count3 }) =>
    _$.on($scope[6], "click", function () {
      $count7($scope, $count3 + 1);
    }),
  ),
  $count7 = _$.state(11, ($scope, $count3) => {
    _$.data($scope[7], $count3), $count7_effect($scope);
  }),
  $count6_effect = _$.effect("a1", ($scope, { 10: $count2 }) =>
    _$.on($scope[4], "click", function () {
      $count6($scope, $count2 + 1);
    }),
  ),
  $count6 = _$.state(10, ($scope, $count2) => {
    _$.data($scope[5], $count2), $count6_effect($scope);
  }),
  $count5_effect = _$.effect("a2", ($scope, { 9: $count }) =>
    _$.on($scope[2], "click", function () {
      $count5($scope, $count + 1);
    }),
  ),
  $count5 = _$.state(9, ($scope, $count) => {
    _$.data($scope[3], $count), $count5_effect($scope);
  }),
  $count4_effect = _$.effect("a3", ($scope, { 8: count }) =>
    _$.on($scope[0], "click", function () {
      $count4($scope, count + 1);
    }),
  ),
  $count4 = _$.state(8, ($scope, count) => {
    _$.data($scope[1], count), $count4_effect($scope);
  });
init();
