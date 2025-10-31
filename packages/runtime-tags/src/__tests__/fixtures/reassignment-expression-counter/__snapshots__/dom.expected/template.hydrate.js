// size: 245 (min) 123 (brotli)
const $count__script = _._script("a0", ($scope) => {
    (_._on($scope[0], "click", function () {
      $count($scope, $scope[6] + 2);
    }),
      _._on($scope[2], "click", function () {
        $count($scope, 3 * $scope[6]);
      }),
      _._on($scope[4], "click", function () {
        $count($scope, $scope[6] ** 3);
      }));
  }),
  $count = _._let(6, ($scope) => {
    (_._text($scope[1], $scope[6]),
      _._text($scope[3], $scope[6]),
      _._text($scope[5], $scope[6]),
      $count__script($scope));
  });
init();
