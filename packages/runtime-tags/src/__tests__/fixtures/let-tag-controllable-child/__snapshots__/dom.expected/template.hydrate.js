// size: 551 (min) 247 (brotli)
const $state__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $state($scope, $scope[11] + 1);
    }),
  ),
  $state = _._let(11, ($scope) => {
    (_._text($scope[2], $scope[11]), $state__script($scope));
  }),
  $input_value__OR__input_valueChange = _._or(10, ($scope) =>
    $state($scope, $scope[8], $scope[9]),
  ),
  $input_value = _._const(8, ($scope) => {
    (_._text($scope[1], $scope[8]),
      _._text($scope[4], $scope[8]),
      $input_value__OR__input_valueChange($scope));
  }),
  $input_valueChange = _._const(9, $input_value__OR__input_valueChange),
  $otherState__script = _._script("a1", ($scope) =>
    _._on($scope[3], "click", function () {
      $otherState($scope, $scope[12] + 1);
    }),
  ),
  $otherState = _._let(12, ($scope) => {
    (_._text($scope[5], $scope[12]), $otherState__script($scope));
  }),
  $input = _._const(7, ($scope) => {
    ($input_value($scope, $scope[7].value),
      $input_valueChange($scope, $scope[7].valueChange),
      $otherState($scope, $scope[7].value, $scope[7].valueChange));
  }),
  $source = _._let(2, ($scope) => {
    ($input($scope[0], { value: $scope[2], valueChange: $valueChange($scope) }),
      _._text($scope[1], $scope[2]));
  });
function $valueChange($scope) {
  return (_new_source) => {
    $source($scope, _new_source);
  };
}
(_._resume("b0", $valueChange), init());
