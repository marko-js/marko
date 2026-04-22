// size: 150 (min) 149 (brotli)
const $if_content__mounted = _._if_closure(0, 0, ($scope) =>
    _._text($scope.a, $scope._.b && `C`),
  ),
  $if_content__setup = $if_content__mounted,
  $if = _._if(0, `AB<!>D`, `b%c`, $if_content__setup),
  $mounted = _._let(1, ($scope) => {
    ($if($scope, +!$scope.b), $if_content__mounted($scope));
  });
(_._script(`a0`, ($scope) => $mounted($scope, !0)), init());
