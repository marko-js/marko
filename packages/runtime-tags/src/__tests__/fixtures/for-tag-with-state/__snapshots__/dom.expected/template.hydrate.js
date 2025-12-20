// size: 178 (min) 150 (brotli)
const $for_content2__setup = ($scope) => _._text($scope.a, $scope.M),
  $for_content2__$params = ($scope, $params3) =>
    (($scope, val) => _._text($scope.b, val))($scope, $params3[0]),
  $for2 = _._for_of(
    1,
    "<div><!>: <!></div>",
    "D%c%l",
    $for_content2__setup,
    $for_content2__$params,
  ),
  $arrB = _._let(3, ($scope) => $for2($scope, [$scope.d]));
(_._script("a0", ($scope) => $arrB($scope, [1, 2])), init());
