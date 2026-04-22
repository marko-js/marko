// size: 284 (min) 170 (brotli)
const $input_value__OR__setter = _._or(5, ($scope) =>
    _._return($scope, ($scope.d, $scope.e)),
  ),
  $input_value = _._const(3, $input_value__OR__setter);
function $setter($scope) {
  return function () {
    $scope.c(1);
  };
}
_._resume(`a0`, $setter);
const $count = _._let(3, ($scope) => {
    ($input_value($scope.a, $scope.d), _._text($scope.c, $scope.d));
  }),
  $setCount__script = _._script(`b1`, ($scope) => $scope.e());
_._var_resume(`b2`, _._const(4, $setCount__script));
function $valueChange($scope) {
  return (_new_count) => {
    $count($scope, _new_count);
  };
}
(_._resume(`b0`, $valueChange), init());
