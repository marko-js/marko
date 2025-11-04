// size: 420 (min) 153 (brotli)
const $count4__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count4($scope, $scope.i + 1);
    }),
  ),
  $count4 = _._let(8, ($scope) => {
    (_._text($scope.b, $scope.i), $count4__script($scope));
  }),
  $count5__script = _._script("a1", ($scope) =>
    _._on($scope.c, "click", function () {
      $count5($scope, $scope.j + 1);
    }),
  ),
  $count5 = _._let(9, ($scope) => {
    (_._text($scope.d, $scope.j), $count5__script($scope));
  }),
  $count6__script = _._script("a2", ($scope) =>
    _._on($scope.e, "click", function () {
      $count6($scope, $scope.k + 1);
    }),
  ),
  $count6 = _._let(10, ($scope) => {
    (_._text($scope.f, $scope.k), $count6__script($scope));
  }),
  $count7__script = _._script("a3", ($scope) =>
    _._on($scope.g, "click", function () {
      $count7($scope, $scope.l + 1);
    }),
  ),
  $count7 = _._let(11, ($scope) => {
    (_._text($scope.h, $scope.l), $count7__script($scope));
  });
init();
