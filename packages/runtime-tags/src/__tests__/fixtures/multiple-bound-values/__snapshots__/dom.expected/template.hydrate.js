// size: 584 (min) 231 (brotli)
const $expr_input_count2_input_count2Change = _$.intersection(11, ($scope) => {
    const { 9: input_count2, 10: input_count2Change } = $scope;
    $count2$1($scope, input_count2, input_count2Change);
  }),
  $expr_input_count1_input_count1Change = _$.intersection(8, ($scope) => {
    const { 6: input_count1, 7: input_count1Change } = $scope;
    $count$1($scope, input_count1, input_count1Change);
  }),
  $count2_effect = _$.effect("a0", ($scope, { 13: count2 }) =>
    _$.on($scope[2], "click", function () {
      $count2$1($scope, count2 + 1);
    }),
  ),
  $count2$1 = _$.state(13, ($scope, count2) => {
    _$.data($scope[3], count2), $count2_effect($scope);
  }),
  $count_effect = _$.effect("a1", ($scope, { 12: count1 }) =>
    _$.on($scope[0], "click", function () {
      $count$1($scope, count1 + 1);
    }),
  ),
  $count$1 = _$.state(12, ($scope, count1) => {
    _$.data($scope[1], count1), $count_effect($scope);
  }),
  $input_count2 = _$.value(9, $expr_input_count2_input_count2Change),
  $input_count = _$.value(6, $expr_input_count1_input_count1Change),
  $count2 = _$.state(4, ($scope, count2) => {
    $input_count2($scope[0], count2), _$.data($scope[2], count2);
  }),
  $count = _$.state(3, ($scope, count1) => {
    $input_count($scope[0], count1), _$.data($scope[1], count1);
  });
_$.register("b1", function ($scope) {
  return (_new_count2) => {
    $count2($scope, _new_count2);
  };
}),
  _$.register("b0", function ($scope) {
    return (_new_count1) => {
      $count($scope, _new_count1);
    };
  }),
  init();
