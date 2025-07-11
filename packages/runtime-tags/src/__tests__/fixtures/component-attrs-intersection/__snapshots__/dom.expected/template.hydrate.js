// size: 187 (min) 142 (brotli)
const $expr_value_dummy = _$.intersection(5, ($scope) => {
    const { 3: value, 4: dummy } = $scope;
    _$.data($scope[0], value);
  }),
  $value = _$.value(3, $expr_value_dummy),
  $count_effect = _$.effect("b0", ($scope, { 2: count }) =>
    _$.on($scope[1], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(2, ($scope, count) => {
    ($value($scope[0], count), $count_effect($scope));
  });
init();
