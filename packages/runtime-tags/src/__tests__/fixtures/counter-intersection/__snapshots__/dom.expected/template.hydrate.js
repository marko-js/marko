// size: 248 (min) 141 (brotli)
const $expr_a_b = _$.intersection(7, ($scope) => {
    let { 5: a, 6: b } = $scope;
    _$.data($scope[4], a + b);
  }),
  $a = _$.state(5, ($scope, a) => {
    (_$.data($scope[1], a), $expr_a_b($scope));
  }),
  $b = _$.state(6, ($scope, b) => {
    (_$.data($scope[3], b), $expr_a_b($scope));
  });
(_$.effect("a0", ($scope) => {
  (_$.on($scope[0], "click", function () {
    $a($scope, 10);
  }),
    _$.on($scope[2], "click", function () {
      $b($scope, 5);
    }));
}),
  init());
