// size: 175 (min) 130 (brotli)
const $x__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $x($scope, $scope.d + 1);
    }),
  ),
  $x = _._let(3, ($scope) => {
    (_._text($scope.c, $scope.d),
      (($scope, myObj) => {
        _._text($scope.a, JSON.stringify(myObj));
      })($scope, { foo: 1, bar: $scope.d + 1 }),
      $x__script($scope));
  });
init();
