// size: 583 (min) 260 (brotli)
const $state_effect = _$.effect("a0", ($scope, { 11: state }) =>
    _$.on($scope[0], "click", function () {
      $state($scope, state + 1);
    }),
  ),
  $state = _$.state(11, ($scope, state) => {
    _$.data($scope[2], state), $state_effect($scope);
  }),
  $expr_input_value_input_valueChange = _$.intersection(10, ($scope) => {
    const { 8: input_value, 9: input_valueChange } = $scope;
    $state($scope, input_value, input_valueChange);
  }),
  $input_value = _$.value(8, ($scope, input_value) => {
    _$.data($scope[1], input_value),
      _$.data($scope[4], input_value),
      $expr_input_value_input_valueChange($scope);
  }),
  $input_valueChange = _$.value(9, $expr_input_value_input_valueChange),
  $otherState_effect = _$.effect("a1", ($scope, { 12: otherState }) =>
    _$.on($scope[3], "click", function () {
      $otherState($scope, otherState + 1);
    }),
  ),
  $otherState = _$.state(12, ($scope, otherState) => {
    _$.data($scope[5], otherState), $otherState_effect($scope);
  }),
  $input = _$.value(7, ($scope, input) => {
    $input_value($scope, input.value),
      $input_valueChange($scope, input.valueChange),
      $otherState($scope, input.value, input.valueChange);
  }),
  $source = _$.state(2, ($scope, source) => {
    $input($scope[0], { value: source, valueChange: $valueChange($scope) }),
      _$.data($scope[1], source);
  });
function $valueChange($scope) {
  return (_new_source) => {
    $source($scope, _new_source);
  };
}
_$.register("b0", $valueChange), init();
