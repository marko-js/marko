// size: 514 (min) 223 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count$1($scope, $scope[12] + 1);
    }),
  ),
  $count$1 = _._let(12, ($scope) => {
    (_._text($scope[1], $scope[12]), $count__script($scope));
  }),
  $input_count1__OR__input_count1Change = _._or(8, ($scope) =>
    $count$1($scope, $scope[6], $scope[7]),
  ),
  $input_count = _._const(6, $input_count1__OR__input_count1Change),
  $count2__script = _._script("a1", ($scope) =>
    _._on($scope[2], "click", function () {
      $count2$1($scope, $scope[13] + 1);
    }),
  ),
  $count2$1 = _._let(13, ($scope) => {
    (_._text($scope[3], $scope[13]), $count2__script($scope));
  }),
  $input_count2__OR__input_count2Change = _._or(11, ($scope) =>
    $count2$1($scope, $scope[9], $scope[10]),
  ),
  $input_count2 = _._const(9, $input_count2__OR__input_count2Change),
  $count = _._let(3, ($scope) => {
    ($input_count($scope[0], $scope[3]), _._text($scope[1], $scope[3]));
  }),
  $count2 = _._let(4, ($scope) => {
    ($input_count2($scope[0], $scope[4]), _._text($scope[2], $scope[4]));
  });
(_._resume("b1", function ($scope) {
  return (_new_count2) => {
    $count2($scope, _new_count2);
  };
}),
  _._resume("b0", function ($scope) {
    return (_new_count1) => {
      $count($scope, _new_count1);
    };
  }),
  init());
