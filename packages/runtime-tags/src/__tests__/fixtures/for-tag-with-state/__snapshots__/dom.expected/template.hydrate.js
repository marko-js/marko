// size: 202 (min) 160 (brotli)
const $for_content2__setup = ($scope) => {
    _._text($scope.a, $scope.M);
  },
  $for_content2__val = _._const(3, ($scope) => _._text($scope.b, $scope.d)),
  $for_content2__$params = _._const(2, ($scope) =>
    $for_content2__val($scope, $scope.c[0]),
  ),
  $for2 = _._for_of(
    1,
    "<div><!>: <!></div>",
    "D%c%l",
    $for_content2__setup,
    $for_content2__$params,
  ),
  $arrB = _._let(3, ($scope) => $for2($scope, [$scope.d]));
(_._script("a0", ($scope) => $arrB($scope, [1, 2])), init());
