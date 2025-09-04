// size: 560 (min) 269 (brotli)
const $state__script = _._script("a0", ($scope, { 11: state }) =>
    _._on($scope[0], "click", function () {
      $state($scope, ++state);
    }),
  ),
  $state = _._let(11, ($scope, state) => {
    (_._text($scope[2], state), $state__script($scope));
  }),
  $input_value__OR__input_valueChange = _._or(10, ($scope) => {
    let { 8: input_value, 9: input_valueChange } = $scope;
    $state($scope, input_value, input_valueChange);
  }),
  $input_value = _._const(8, ($scope, input_value) => {
    (_._text($scope[1], input_value),
      _._text($scope[4], input_value),
      $input_value__OR__input_valueChange($scope));
  }),
  $input_valueChange = _._const(9, $input_value__OR__input_valueChange),
  $otherState__script = _._script("a1", ($scope, { 12: otherState }) =>
    _._on($scope[3], "click", function () {
      $otherState($scope, ++otherState);
    }),
  ),
  $otherState = _._let(12, ($scope, otherState) => {
    (_._text($scope[5], otherState), $otherState__script($scope));
  }),
  $input = _._const(7, ($scope, input) => {
    ($input_value($scope, input.value),
      $input_valueChange($scope, input.valueChange),
      $otherState($scope, input.value, input.valueChange));
  }),
  $source = _._let(2, ($scope, source) => {
    ($input($scope[0], { value: source, valueChange: $valueChange($scope) }),
      _._text($scope[1], source));
  });
function $valueChange($scope) {
  return (_new_source) => {
    $source($scope, _new_source);
  };
}
(_._resume("b0", $valueChange), init());
