// size: 175 (min) 154 (brotli)
const $if_content__mounted = _._if_closure(0, 0, ($scope) =>
    _._text($scope.a, $scope._.b && "C"),
  ),
  $if_content__setup = $if_content__mounted,
  $if_content = _._content_branch("AB<!>D", "b%c", $if_content__setup),
  $if = _._if(0, $if_content),
  $mounted = _._let(1, ($scope) => {
    ($if($scope, $scope.b ? 0 : 1), $if_content__mounted($scope));
  });
(_._script("a0", ($scope) => $mounted($scope, !0)), init());
