// size: 256 (min) 176 (brotli)
const $for_content2__i = _._const(4, ($scope) => _._text($scope[0], $scope[4])),
  $for_content2__val = _._const(3, ($scope) => _._text($scope[1], $scope[3])),
  $for_content2__$params = _._const(2, ($scope) => {
    ($for_content2__val($scope, $scope[2][0]),
      $for_content2__i($scope, $scope[2][1]));
  }),
  $for_content2 = _._content_branch(
    "<div><!>: <!></div>",
    "D%c%l",
    0,
    $for_content2__$params,
  ),
  $for2 = _._for_of(1, $for_content2),
  $arrB = _._let(3, ($scope) => $for2($scope, [$scope[3]]));
(_._script("a0", ($scope) => $arrB($scope, [1, 2])), init());
