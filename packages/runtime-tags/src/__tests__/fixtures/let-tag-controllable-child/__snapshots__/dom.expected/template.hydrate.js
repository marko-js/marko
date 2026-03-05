// size: 644 (min) 262 (brotli)
const $state__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $state($scope, $scope.o + 1);
    }),
  ),
  $state = _._let(14, ($scope) => {
    (_._text($scope.c, $scope.o), $state__script($scope));
  }),
  $thirdState__script = _._script("a1", ($scope) =>
    _._on($scope.g, "click", function () {
      $thirdState($scope, $scope.q + 1);
    }),
  ),
  $thirdState = _._let(16, ($scope) => {
    (_._text($scope.i, $scope.q), $thirdState__script($scope));
  }),
  $input_value__OR__input_valueChange = _._or(13, ($scope) => {
    ($state($scope, $scope.l, $scope.m),
      $thirdState($scope, $scope.l, $scope.m));
  }),
  $input_value = _._const(11, ($scope) => {
    (_._text($scope.b, $scope.l),
      _._text($scope.e, $scope.l),
      _._text($scope.h, $scope.l),
      $input_value__OR__input_valueChange($scope));
  }),
  $input_valueChange = _._const(12, $input_value__OR__input_valueChange),
  $otherState__script = _._script("a2", ($scope) =>
    _._on($scope.d, "click", function () {
      $otherState($scope, $scope.p + 1);
    }),
  ),
  $otherState = _._let(15, ($scope) => {
    (_._text($scope.f, $scope.p), $otherState__script($scope));
  }),
  $source = _._let(2, ($scope) => {
    ((($scope, input) => {
      ($input_value($scope, input.value),
        $input_valueChange($scope, input.valueChange),
        $otherState($scope, input.value, input.valueChange));
    })($scope.a, { value: $scope.c, valueChange: $valueChange($scope) }),
      _._text($scope.b, $scope.c));
  });
function $valueChange($scope) {
  return (_new_source) => {
    $source($scope, _new_source);
  };
}
(_._resume("b0", $valueChange), init());
