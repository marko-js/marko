// size: 272 (min) 188 (brotli)
const $if_content__setup = ($scope) => {
    $MyTag_content__setup._($scope.a, $scope._);
  },
  $MyTag_content__x = _._closure_get(4, ($scope) =>
    _._text($scope.a, $scope._.e),
  ),
  $MyTag_content__setup = _._child_setup($MyTag_content__x),
  $if = _._if(1, "<!><div> </div><!>", "b/D l&b", $if_content__setup),
  $x__closure = _._closure($MyTag_content__x),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope.c, "click", function () {
      $x($scope, $scope.e + 1);
    }),
  ),
  $x = _._let(4, ($scope) => {
    (_._text($scope.d, $scope.e),
      $if($scope, ($scope.e, 0)),
      $x__closure($scope),
      $x__script($scope));
  });
init();
