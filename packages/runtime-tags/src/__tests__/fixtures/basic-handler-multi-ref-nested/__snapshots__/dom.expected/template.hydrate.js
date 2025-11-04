// size: 144 (min) 130 (brotli)
const $a__OR__b__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $a(
        $scope,
        $scope.c.map((a) => $scope.d),
      );
    }),
  ),
  $a__OR__b = _._or(4, $a__OR__b__script),
  $a = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c.join("")), $a__OR__b($scope));
  });
init();
