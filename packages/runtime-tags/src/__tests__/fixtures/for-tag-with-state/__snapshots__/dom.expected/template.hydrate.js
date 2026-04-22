// size: 176 (min) 145 (brotli)
const $for_content2__setup = ($scope) => _._text($scope.a, $scope.M),
  $for_content2__val = ($scope, val) => _._text($scope.b, val),
  $for2 = _._for_of(
    1,
    `<div><!>: <!></div>`,
    `D%c%l`,
    $for_content2__setup,
    ($scope, $params3) => $for_content2__val($scope, $params3[0]),
  ),
  $arrB = _._let(3, ($scope) => $for2($scope, [$scope.d]));
(_._script(`a0`, ($scope) => $arrB($scope, [1, 2])), init());
