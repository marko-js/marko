// size: 185 (min) 140 (brotli)
const $expr_a_b_effect = _$.effect("a0", ($scope, { 2: a, 3: b }) =>
    _$.on($scope[0], "click", function () {
      ($a($scope, ++a), $b($scope, ++b));
    }),
  ),
  $expr_a_b = _$.intersection(4, ($scope) => {
    const { 2: a, 3: b } = $scope;
    (_$.data($scope[1], a + b), $expr_a_b_effect($scope));
  }),
  $a = _$.state(2, $expr_a_b),
  $b = _$.state(3, $expr_a_b);
init();
