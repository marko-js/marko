// size: 286 (min) 177 (brotli)
const $input_value__OR__setter = _._or(5, ($scope) =>
    _._return($scope, ($scope[3], $scope[4])),
  ),
  $input_value = _._const(3, $input_value__OR__setter);
_._resume("a0", function ($scope) {
  return function () {
    $scope[2](1);
  };
});
const $count = _._let(3, ($scope) => {
    ($input_value($scope[0], $scope[3]), _._text($scope[2], $scope[3]));
  }),
  $setCount__script = _._script("b1", ($scope) => $scope[4]());
(_._var_resume("b2", _._const(4, $setCount__script)),
  _._resume("b0", function ($scope) {
    return (_new_count) => {
      $count($scope, _new_count);
    };
  }),
  init());
