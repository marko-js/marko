// size: 313 (min) 219 (brotli)
const $MyTag_content__value = _._const(3, ($scope) =>
    _._text($scope[0], $scope[3]),
  ),
  $if_content__x = _._if_closure(0, 0, ($scope) =>
    $MyTag_content__value($scope[0], $scope._[4]),
  ),
  $if_content__setup = $if_content__x,
  $if_content = _._content_branch(
    "<!><div>Hello <!></div><!>",
    "b/Db%l&b",
    $if_content__setup,
  ),
  $if = _._if(0, $if_content),
  $show = _._let(3, ($scope) => $if($scope, $scope[3] ? 0 : 1)),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      ($x($scope, $scope[4] + 1), $show($scope, !0));
    }),
  ),
  $x = _._let(4, ($scope) => {
    (_._text($scope[2], $scope[4]), $if_content__x($scope), $x__script($scope));
  });
init();
