// size: 298 (min) 192 (brotli)
const $input_value__OR__setter = _._or(5, ($scope) => {
    let { 3: input_value, 4: setter } = $scope;
    _._return($scope, setter);
  }),
  $input_value = _._const(3, $input_value__OR__setter);
_._resume("a0", function ({ 2: input_valueChange }) {
  return function () {
    input_valueChange(1);
  };
});
const $count = _._let(3, ($scope, count) => {
    ($input_value($scope[0], count), _._text($scope[2], count));
  }),
  $setCount__script = _._script("b1", ({ 4: setCount }) => setCount.fn());
(_._var_resume("b2", _._const(4, $setCount__script)),
  _._resume("b0", function ($scope) {
    return (_new_count) => {
      $count($scope, _new_count);
    };
  }),
  init());
