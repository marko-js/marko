// size: 305 (min) 181 (brotli)
const $multipliedCount = _$.value(7, ($scope, multipliedCount) =>
    _$.data($scope[3], multipliedCount),
  ),
  $expr_count_multiplier = _$.intersection(6, ($scope) => {
    let { 4: count, 5: multiplier } = $scope;
    $multipliedCount($scope, count * multiplier);
  }),
  $count_effect = _$.effect("a0", ($scope, { 4: count }) =>
    _$.on($scope[2], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _$.state(4, ($scope) => {
    ($expr_count_multiplier($scope), $count_effect($scope));
  }),
  $multiplier_effect = _$.effect("a1", ($scope, { 5: multiplier }) =>
    _$.on($scope[0], "click", function () {
      $multiplier($scope, ++multiplier);
    }),
  ),
  $multiplier = _$.state(5, ($scope, multiplier) => {
    (_$.data($scope[1], multiplier),
      $expr_count_multiplier($scope),
      $multiplier_effect($scope));
  });
init();
