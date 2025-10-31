// size: 214 (min) 163 (brotli)
const $pattern2 = _._const(4, ($scope) => $a($scope, $scope[4].a)),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[3] + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    ($pattern2($scope, { a: $scope[3] }), $count__script($scope));
  }),
  $a = _._const(5, ($scope) => {
    (_._text($scope[1], $scope[5]), $b($scope, $scope[5]));
  }),
  $b = ($scope) => {
    _._text($scope[2], $scope[5]);
  };
init();
