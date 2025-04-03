// size: 171 (min) 143 (brotli)
const $expr_a_b_effect = _$.effect("a0", ($scope, { 2: a, 3: b }) =>
    _$.on($scope[0], "click", function () {
      $a(
        $scope,
        a.map((a) => b),
      );
    }),
  ),
  $expr_a_b = _$.intersection(4, $expr_a_b_effect),
  $a = _$.state(2, ($scope, a) => {
    _$.data($scope[1], a.join("")), $expr_a_b($scope);
  });
init();
