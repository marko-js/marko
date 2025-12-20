// size: 269 (min) 201 (brotli)
const $if_content__x = _._if_closure(0, 0, ($scope) =>
    (($scope, value) => _._text($scope.a, value))($scope.a, $scope._.e),
  ),
  $if_content__setup = $if_content__x,
  $if = _._if(0, "<!><div>Hello <!></div><!>", "b/Db%l&b", $if_content__setup),
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
