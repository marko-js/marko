// size: 440 (min) 155 (brotli)
const $count4__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count4($scope, $scope[8] + 1);
    }),
  ),
  $count4 = _._let(8, ($scope) => {
    (_._text($scope[1], $scope[8]), $count4__script($scope));
  }),
  $count5__script = _._script("a1", ($scope) =>
    _._on($scope[2], "click", function () {
      $count5($scope, $scope[9] + 1);
    }),
  ),
  $count5 = _._let(9, ($scope) => {
    (_._text($scope[3], $scope[9]), $count5__script($scope));
  }),
  $count6__script = _._script("a2", ($scope) =>
    _._on($scope[4], "click", function () {
      $count6($scope, $scope[10] + 1);
    }),
  ),
  $count6 = _._let(10, ($scope) => {
    (_._text($scope[5], $scope[10]), $count6__script($scope));
  }),
  $count7__script = _._script("a3", ($scope) =>
    _._on($scope[6], "click", function () {
      $count7($scope, $scope[11] + 1);
    }),
  ),
  $count7 = _._let(11, ($scope) => {
    (_._text($scope[7], $scope[11]), $count7__script($scope));
  });
init();
