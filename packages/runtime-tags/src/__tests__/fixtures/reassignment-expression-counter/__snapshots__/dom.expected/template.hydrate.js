// size: 236 (min) 122 (brotli)
const $count_effect = _$.effect("a0", ($scope, { 6: count }) => {
    (_$.on($scope[0], "click", function () {
      $count($scope, (count += 2));
    }),
      _$.on($scope[2], "click", function () {
        $count($scope, (count *= 3));
      }),
      _$.on($scope[4], "click", function () {
        $count($scope, (count **= 3));
      }));
  }),
  $count = _$.state(6, ($scope, count) => {
    (_$.data($scope[1], count),
      _$.data($scope[3], count),
      _$.data($scope[5], count),
      $count_effect($scope));
  });
init();
