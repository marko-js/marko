// size: 149 (min) 129 (brotli)
const $a__OR__b__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $a(
        $scope,
        $scope[2].map((a) => $scope[3]),
      );
    }),
  ),
  $a__OR__b = _._or(4, $a__OR__b__script),
  $a = _._let(2, ($scope) => {
    (_._text($scope[1], $scope[2].join("")), $a__OR__b($scope));
  });
init();
