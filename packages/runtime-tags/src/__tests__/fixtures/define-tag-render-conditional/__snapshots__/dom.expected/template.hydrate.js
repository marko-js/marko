// size: 304 (min) 217 (brotli)
const $MyTag_content__value = _._const(3, ($scope) =>
    _._text($scope.a, $scope.d),
  ),
  $if_content__x = _._if_closure(0, 0, ($scope) =>
    $MyTag_content__value($scope.a, $scope._.e),
  ),
  $if_content__setup = $if_content__x,
  $if_content = _._content_branch(
    "<!><div>Hello <!></div><!>",
    "b/Db%l&b",
    $if_content__setup,
  ),
  $if = _._if(0, $if_content),
  $show = _._let(3, ($scope) => $if($scope, $scope.d ? 0 : 1)),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      ($x($scope, $scope.e + 1), $show($scope, !0));
    }),
  ),
  $x = _._let(4, ($scope) => {
    (_._text($scope.c, $scope.e), $if_content__x($scope), $x__script($scope));
  });
init();
